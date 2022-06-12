import React, { useEffect, useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import useStyles from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // TODO change this as it was already commited
    const clientId = '236688733035-s6druk38ih8vavu65r1evee1opm15mjb.apps.googleusercontent.com';

    useEffect(() => {
        function start() {
            gapi.auth2.init({
                client_id: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
    });

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: {result, token} })

            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log("Google Sign In was unsuccessful. Try again later.")
        console.log(error);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Zarejestruj się' : 'Zaloguj się'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="Imię" handleChange={handleChange} autofocus half />
                                    <Input name="lastName" label="Nazwisko" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label="Adres e-mail" handleChange={handleChange} type="email" />
                        <Input name='password' label="Hasło" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Powtórz hasło" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Zarejestruj się' : 'Zaloguj się'}
                    </Button>
                    <GoogleLogin 
                        clientId={clientId}
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Zaloguj się z Google
                            </Button>
                        )}
                        onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy={"single_host_origin"}
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{isSignup ? 'Masz już konto? Zaloguj się' : "Nie masz konta? Zarejestruj się"}</Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth

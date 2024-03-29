import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

import niechcemisieLogo from '../../images/logo.png';
import { LOGOUT } from '../../constants/actionTypes';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 10px;
  padding-botton: 30px;
`;

const Title = styled.span`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    text-align: center;
    color: #f5f5f5;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 18px;
`;

const UserName = styled.span`
    color: #f5f5f5;
    margin-right: 20px;
`;

const Navbar = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
      if (selected === i) {
          return setSelected(null);
      }

      setSelected(i);
    }

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const logout = () => {
        dispatch({ type: LOGOUT });
        
        navigate('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));

        // TODO
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <>
        <Nav>
          {user?.result ? (
              <>
                <Avatar style={{marginRight: '20px'}} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                <UserName>{user?.result.name}</UserName>
                <Button style={{marginRight: '40px'}} onClick={logout} color="secondary" variant="contained">Wyloguj</Button>
              </>
           ) : (
             <Button style={{margin: '40px'}} component={Link} to="/auth" variant="contained" color="primary">Zaloguj się</Button>
           )}
        </Nav>
          <IconContext.Provider value={{ color: '#fff' }}>
            <SidebarNav>
              <SidebarWrap>
                <Logo src={niechcemisieLogo} />
                <Title>Nie chce mi się</Title>
                {SidebarData.map((item, i) => {
                  return <SubMenu item={item} key={i} idx={i} selected={selected} toggle={() => toggle(i)} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </>
    );
};

export default Navbar

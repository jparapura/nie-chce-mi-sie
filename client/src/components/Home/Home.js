import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { substitutePosts, loadOlderPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const postsToLoad = 2;
    const initialLoad = 3;
    let offset = initialLoad;
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    const handleEndOfPage = () => {
        dispatch(loadOlderPosts({ limit: postsToLoad, offset }));
        offset += postsToLoad;
    };

    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = Math.ceil(
            e.target.documentElement.scrollTop + window.innerHeight
        );
        if (currentHeight >= scrollHeight) {
            handleEndOfPage();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        dispatch(substitutePosts({ limit: initialLoad, offset: 0 }));
    }, []);

    const increaseOffset = () => {
        offset += 1;
    };

    const decreaseOffset = () => {
        offset -= 1;
    };

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} increaseOffset={increaseOffset} />
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} decreaseOffset={decreaseOffset} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home

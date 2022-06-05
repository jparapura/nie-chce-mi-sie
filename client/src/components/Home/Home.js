import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { substitutePosts, loadOlderPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Container = styled.div`
    margin: auto;
    width: 50%;
`;

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
        <Container>
            <Form currentId={currentId} setCurrentId={setCurrentId} increaseOffset={increaseOffset} />
            <Posts setCurrentId={setCurrentId} decreaseOffset={decreaseOffset} />
        </Container>
    );
}

export default Home

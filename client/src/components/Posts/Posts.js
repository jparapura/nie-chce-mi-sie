import React from 'react';
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Container = styled.div`
  position: absolute;
  left: 30%;
  top: ${p => p.isSignedIn ? '550px' : '200px'};
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
`;

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Container isSignedIn={localStorage.getItem('profile')}>
                {posts.map((post) => (
                    <PostContainer key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </PostContainer>
                ))}
            </Container>
        )
    );
}

export default Posts;

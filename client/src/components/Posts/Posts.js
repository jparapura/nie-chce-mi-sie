import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Container = styled.div`
  position: absolute;
  top: ${p => p.isSignedIn ? '550px' : '200px'};
  width: 40vh;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
`;

const Posts = ({ setCurrentId, decreaseOffset }) => {
    const posts = useSelector((state) => state.posts);

  useEffect(() => {
      console.log(posts);
  });

    return (
        // TODO progress is not visible
        !posts.length ? <CircularProgress /> : (
            <Container isSignedIn={localStorage.getItem('profile')}>
                {posts.map((post) => (
                    <PostContainer key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} decreaseOffset={decreaseOffset} />
                    </PostContainer>
                ))}
            </Container>
        )
    );
}

export default Posts;

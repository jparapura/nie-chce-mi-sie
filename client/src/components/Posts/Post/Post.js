import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import 'moment/locale/pl';

import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Picture = styled.img`
    width: 500px;
    margin-bottom: 10px;
`;

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #f5f5f5;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    width: 500px;
`;

const Message = styled.span`
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: justify;
`;

const Tags = styled.span`
    color: grey;
    font-size: 13px;
`;

const Footer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const Post = ({ post, setCurrentId, decreaseOffset }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const handleDelete = () => {
        dispatch(deletePost(post._id));
        decreaseOffset();
    };

    const handleEdit = () => {
        setCurrentId(post._id);
        window.scrollTo(0, 0);
    }

    return (
        <PostDiv>
            <Header>
                <span><strong>{post.name}</strong> nie chciało się <strong>{post.title}</strong> {moment(post.createdAt).fromNow()}.</span>
                {( user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) && (
                    <div>
                        <Button style={{color: 'black'}} size="small" onClick={handleEdit}>
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                    </div>
                )}
            </Header>
            <Message>{post.message}</Message>
            { post.selectedFile &&
                <Picture src={post.selectedFile} />
            }
            <div>
                <Tags>{post.tags.map((tag) => `#${tag} `)}</Tags>
            </div>
            <Footer>
                <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {( user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) && (
                    <Button size='small' color='primary' onClick={handleDelete}>
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                )}

            </Footer>
        </PostDiv>
    );
}

export default Post;

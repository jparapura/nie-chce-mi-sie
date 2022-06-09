import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core/';

import { commentPost } from '../../../actions/posts';

const CommentSection = ({ post }) => {
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    const handleClick = async () => {
        const commentWithName = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(commentWithName, post._id));

        setComments(newComments);
        setComment('');
    }

    return (
        <>
            <div>
                <h6>Komentarze</h6>
                {comments.map((c, i) => (
                    <div key={i}>
                        <strong>{c.split(': ')[0]}</strong>
                        {/* TODO what if sb put ':' inside comment? */}
                        {c.split(':')[1]}
                    </div>
                ))}
            </div>
            {user?.result?.name && (
                <div style={{ width: '70%' }}>
                    <span>Napisz komentarz</span>
                    <TextField
                        fullWidth
                        minRows={4}
                        variant="outlined"
                        label="Komentarz"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" onClick={handleClick}>
                        Komentuj
                    </Button>
                </div>
            )}
        </>
    );
};

export default CommentSection;

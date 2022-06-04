import { SUBSTITUTE_ALL, LOAD_OLDER, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const substitutePosts = (limits) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(limits);

        dispatch({ type: SUBSTITUTE_ALL, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const loadOlderPosts = (limits) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(limits);

        dispatch({ type: LOAD_OLDER, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try { 
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

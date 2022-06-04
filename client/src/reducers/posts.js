import { SUBSTITUTE_ALL, LOAD_OLDER, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case SUBSTITUTE_ALL:
            return action.payload;
        case LOAD_OLDER:
            return [...posts, ...action.payload];
        case CREATE:
            return [action.payload, ...posts];
        default:
            return posts;
    }
};

export const postReducer = (state = {posts: []}, action) => {
    switch(action.type) {
        case 'SET_POST_LIST_ACTION':
            return action;
        default:
            return state;
    }
};
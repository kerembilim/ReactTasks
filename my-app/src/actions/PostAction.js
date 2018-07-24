import axios from "axios/index";

export const postAction = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({type: 'SET_POST_LIST_ACTION', posts: response.data})
            });
    }
};
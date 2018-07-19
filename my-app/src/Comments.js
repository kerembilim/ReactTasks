import React, {Component} from 'react';
import axios from "axios/index";


class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response=> this.setState({comments: response.data}));
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => comment.postId === this.props.postId ?

                    <div>
                        <p><b>Name : </b>{comment.name}</p>
                        <p><b>Email : </b>{comment.email}</p>
                        <p><b>Body : </b>{comment.body}</p>
                        <hr/>

                    </div>


                    : null
                )

                }

            </div>
        )
    }
}

export default Comments;
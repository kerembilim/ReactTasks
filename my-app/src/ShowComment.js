import React, {Component} from 'react';
import Comments from './Comments';
import axios from "axios/index";

class ShowComment extends Component {
    state={
        comments:[]
    };

    constructor(props) {
        super(props);
        this.state = {
            showReply: false
        };
    }

    onClick(e) {
        e.preventDefault();
        this.setState((state) => ({showReply: !state.showReply}));
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response=> this.setState({comments: response.data}));
    }

    render() {
        return (
            <div>
                {this.state.showReply===false ? <div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Show Comments</button></div>
                    :<div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Hide Comments</button></div>}
                {this.state.showReply && this.state.comments.map(comment => comment.postId === this.props.postId ?
                    <div key={comment.id}>
                        <p><b>Name : </b>{comment.name}</p>
                        <p><b>Email : </b>{comment.email}</p>
                        <p><b>Body : </b>{comment.body}</p>
                        <hr/>
                    </div>
                    : null
                )}
            </div>
        )
    }
}
export default ShowComment;
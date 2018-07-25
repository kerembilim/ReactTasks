import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {commentAction} from "./actions/CommentAction";
import {connect} from "react-redux";
class ShowComment extends Component {
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
        const {commentAction}=this.props;
        commentAction();
    }
    render() {
        const { comments } = this.props;
        return (
            <div>
                {this.state.showReply===false ? <div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Show Comments</button></div>
                    :<div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Hide Comments</button></div>}
                {this.state.showReply && comments.map(comment => comment.postId === this.props.postId ?
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
let storeToProps = (store) => {
    return {
        comments: store.comments.comments
    };
};
const dispatchToProps = (dispatch) => {
    return bindActionCreators({commentAction: commentAction}, dispatch);
};
export default connect(storeToProps, dispatchToProps)(ShowComment);
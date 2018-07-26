import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {commentAction,showReplyAction} from "./actions/CommentAction";
import {connect} from "react-redux";
class ShowComment extends Component {
    onClick(e) {
        const {showReplyAction} = this.props;
        showReplyAction();
    }
    componentDidMount() {
        const {commentAction}=this.props;
        commentAction();
    }
    render() {
        const { comments } = this.props;
        const { showReply} = this.props;
        return (
            <div>
                {showReply===false ? <div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Show Comments</button></div>
                    :<div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Hide Comments</button></div>}
                {showReply && comments.map(comment => comment.postId === this.props.postId ?
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
        comments: store.comments.comments,
        showReply:store.showReply.showReply
    };
};
const dispatchToProps = (dispatch) => {
    return bindActionCreators({commentAction: commentAction,showReplyAction:showReplyAction}, dispatch);
};
export default connect(storeToProps, dispatchToProps)(ShowComment);
import React, {Component} from 'react';
import {Link} from "react-router-dom"
import {bindActionCreators} from "redux";
import {postAction,postUserAction} from "./actions/PostAction";
import {connect} from "react-redux";
class PostList extends Component {
    componentDidMount(){
        const {postAction} = this.props;
        const {postUserAction}=this.props;
        postAction();
        postUserAction();
    }
    render() {
        const { posts } = this.props;
        const {users}   =this.props;
        return(
            <div style={{alignContent:'center', padding:30, paddingLeft:100}} >
                {posts.map(postIndex =>
                    users.map(userIndex =>
                        postIndex.userId==userIndex.id ?
                            <Link key={"link_" + postIndex.id} to={`/posts/${postIndex.id}`} >
                                <div style={{height:'30',width:400,padding:5}}>
                                    <p style={{textAlign:'center',fontSize:17}}><b>Post Title :</b> {postIndex.title}</p>
                                    <p style={{textAlign:'center',fontSize:17}}><b> User Name :</b>{userIndex.username}</p>
                                    <hr/>

                                </div>
                            </Link>
                            : <p></p>
                    )
                )}
            </div>
        )
    }
}
let storeToProps = (store) => {
    return {
        posts: store.posts.posts,
        users: store.users.users
    };
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({postAction: postAction,postUserAction:  postUserAction}, dispatch);

};

export default connect(storeToProps, dispatchToProps)(PostList);

import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';

import {bindActionCreators} from "redux";
import {postAction} from "./actions/PostAction";
import {connect} from "react-redux";

class PostList extends Component {

    state = {
        users: []
    };

    componentDidMount(){
        const {postAction} = this.props;
        postAction();
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>this.setState({users: response.data}));
    }

    render() {
        const { posts } = this.props;
        return(
            <div style={{alignContent:'center', padding:30, paddingLeft:100}} >
                {posts.map(postIndex =>
                    this.state.users.map(userIndex =>
                        postIndex.userId==userIndex.id ?
                            <Link key={"link_" + postIndex.id} to={`/posts/${postIndex.id}`} >
                                <div style={{height:'30',width:400,padding:5}}>
                                    <p style={{textAlign:'center',fontSize:17}}><b>Post Title :</b> {postIndex.title}</p>
                                    <p style={{textAlign:'center',fontSize:17}}><b> User Name :</b>{userIndex.username}</p>

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
    };
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({postAction: postAction}, dispatch);
};

export default connect(storeToProps, dispatchToProps)(PostList);

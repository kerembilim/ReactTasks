import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';


class PostList extends Component {
    state= {
        posts: [],
        users: []};
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>this.setState({posts: response.data}));
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>this.setState({users: response.data}));
    }
    render()
    {
        return(
            <div style={{alignContent:'center',padding:30,paddingLeft:100}} >
                {this.state.posts.map(postindex =>
                    this.state.users.map(userindex =>
                        postindex.userId===userindex.id ?
                            <Link key={"link_" + postindex.id} to={`/posts/${postindex.id}`} >
                                <div key={userindex.id} style={{height:'30',width:400,padding:5}}>
                                    <p style={{textAlign:'center',fontSize:17}}><b>Post Title :</b> {postindex.title}</p>
                                    <p style={{textAlign:'center',fontSize:17}}><b> User Name :</b>{userindex.username}</p>

                                </div>
                            </Link>
                            : null
                    )
                )
                }
            </div>
        )
    }
}
export default PostList;
import React, {Component} from 'react';
import axios from "axios/index";
import ShowComment from './ShowComment';

class PostDetail extends Component {
    state={posts:[],users:[]}


    componentDidMount() {

        const {match: {params}} = this.props;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+params.postId)
            .then(response=>this.setState({posts: response.data}));

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>this.setState({users: response.data}));

    }

    render() {

        return (
            <div style={{alignContent:'center',padding:30,paddingLeft:100}} >



                <div style={{height:'30',width:400,padding:5,}}>
                    <p style={{textAlign:'center',fontSize:17}}><b>Post Title :</b> {this.state.posts.title}</p>
                    <p style={{textAlign:'center',fontSize:17}}><b>Post Body :</b> {this.state.posts.body}</p>
                    {this.state.users.map(index => index.id==this.state.posts.userId ?
                        <div>
                            <p style={{textAlign:'center',fontSize:17}}><b>User Name : </b>{index.username}</p>
                            <p style={{textAlign:'center',fontSize:17}}><b>Name : </b> {index.name}</p>
                            <p style={{textAlign:'center',fontSize:17}}><b>Email : </b> {index.email}</p>
                            <p style={{textAlign:'center',fontSize:17}}><b>Phone : </b> {index.phone}</p>
                            <ShowComment postId={this.state.posts.id}/>
                        </div>      : <div></div>)}


                </div>




            </div>
        )

    }
}

export default PostDetail;
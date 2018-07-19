import React, {Component,Button} from 'react';
import axios from "axios/index";
import Comments from './Comments';

class ShowComment extends Component {
    state={comments:[]}
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


    render() {

        return (
            <div>

                {this.state.showReply==false ? <div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Show Comments</button></div>
                    :<div><button style={{borderRadius:20}} onClick={this.onClick.bind(this)}>Hide Comments</button></div>}
                {this.state.showReply && <Comments postId={this.props.postId}/>}
            </div>
        )

    }

}
export default ShowComment;
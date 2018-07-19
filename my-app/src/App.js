import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";


class App extends Component {
  render() {
    return (
        <Router>
            <div style ={ { backgroundImage: "url('http://nonstopwebsites.co.uk/wp-content/uploads/2017/12/bg-10-full.jpg')" ,backgroundSize:'percentage',borderRadius:15} }>
                <Switch>
                    <Route exact path="/" component={PostList}/>
                    <Route exact path={"/posts/:postId"} component={PostDetail}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PostList from "./PostList";
import PostDetail from "./PostDetail";

import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {postReducer, postUserReducer} from "./reducers/PostReducer";

const reducers = combineReducers({
    posts: postReducer,
    users: postUserReducer
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div style ={ { backgroundImage: "url('http://nonstopwebsites.co.uk/wp-content/uploads/2017/12/bg-10-full.jpg')" ,backgroundSize:'percentage',borderRadius:15} }>
                        <Switch>
                            <Route exact path="/" component={PostList}/>
                            <Route exact path={"/posts/:postId"} component={PostDetail}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
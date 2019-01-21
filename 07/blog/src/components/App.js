import React, { Component } from 'react';
import PostList from './PostList';

class App extends Component {
    render() {
        return (
            <div className="ui containerInfo">
                <PostList />
            </div>
        );
    }
}

export default App;

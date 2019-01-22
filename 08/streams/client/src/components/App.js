import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

const PageOne = () => {
    return <div>1</div>
}

const PageTwo = () => {
    return <div>2</div>
}

class App extends Component {
    render() {
        return <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pageTwo" exact component={PageTwo}/>
            </BrowserRouter>
        </div>;
    }
}

export default App;

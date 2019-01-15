import React, {Component} from 'react';

class Counter extends Component {
    //constructor() {
    //    super();
    //this binds the method 'handleIncrement' with the 'this' of the current object
    //    this.handleIncrement = this.handleIncrement.bind(this);
    //we can also use the arrow function on all methods
    //}

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('Counter - componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    /*
    in javascript,
        empty string falsey -> false && 'Hi' -> false
        at least 1 character is truthy -> true && 'Hi' -> 'Hi'
     */
    render() {
        console.log('Counter - render');
        let classes = this.getBadgeClasses();
        return (
            <div>
                <h4>Counter #{this.props.id}</h4>
                {this.props.counter.tags.length === 0 && "Please create a new tag"}
                <span className={classes}>{this.formatCount()}</span>
                <button
                    //onClick={this.handleIncrement} //no parameters
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                {this.renderTags()}
            </div>
        );
    }

    renderTags() {
        return this.props.counter.tags.length === 0
            ? <p>There are no tags!</p>
            : <ul>{this.props.counter.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
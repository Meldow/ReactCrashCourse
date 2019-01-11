import React, {Component} from 'react';

//https://youtu.be/Ke90Tje7VS0?t=2486
class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    //constructor() {
    //    super();
    //this binds the method 'handleIncrement' with the 'this' of the current object
    //    this.handleIncrement = this.handleIncrement.bind(this);
    //we can also use the arrow function on all methods
    //}

    /*
    in javascript,
        empty string falsey -> false && 'Hi' -> false
        at least 1 character is truthy -> true && 'Hi' -> 'Hi'
     */
    render() {
        let classes = this.getBadgeClasses();
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && "Please create a new tag"}
                <span className={classes}>{this.formatCount()}</span>
                <button
                    //onClick={this.handleIncrement} //no parameters
                    onClick={() => this.handleIncrement({id: 1})}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    handleIncrement = product => {
        console.log("click product: " + product, this);
        // we have to explicitly tell react what as changed
        this.setState({value: this.state.value + 1});
    }

    renderTags() {
        return this.state.tags.length === 0
            ? <p>There are no tags!</p>
            : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
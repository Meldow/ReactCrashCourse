import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4, tags: []},
            {id: 2, value: 2, tags: ["tag1"]},
            {id: 3, value: 0, tags: []},
            {id: 4, value: 0, tags: ["tag2", "tag3"]},
        ]
    }

    render() {
        return (
            <React.Fragment>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id}
                             onDelete={this.handleDelete}
                             onIncrement={this.handleIncrement}
                             counter={counter}
                    />)}
            </React.Fragment>
        );
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        // to update, we clone the input we want to update
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };
}

export default Counters;
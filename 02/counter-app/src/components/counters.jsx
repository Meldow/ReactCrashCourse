import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        console.log('Counters - render');
        const {onReset, counters, onDelete, onIncrement} = this.props; // property destructor
        return (
            <React.Fragment>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {counters.map(counter =>
                    <Counter key={counter.id}
                             onDelete={onDelete}
                             onIncrement={onIncrement}
                             counter={counter}
                    />)}
            </React.Fragment>
        );
    }
}

export default Counters;
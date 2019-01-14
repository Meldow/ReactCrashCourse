import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
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

export default App;
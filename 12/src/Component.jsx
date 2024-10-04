import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
class CounterLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
            currentValue: 0,
        };
    }

    handleAdd = () => {
        const newValue = this.state.currentValue + 1;
        this.setState(prevState => ({
            log: [newValue, ...prevState.log],
            currentValue: newValue,
        }));
    };

    handleSubtract = () => {
        const newValue = this.state.currentValue - 1;
        this.setState(prevState => ({
            log: [newValue, ...prevState.log],
            currentValue: newValue,
        }));
    };

    handleRemove = (index) => {
        this.setState(prevState => {
            let newLog = [...prevState.log.slice(0, index), ...prevState.log.slice(index + 1)];

            return {
                log: newLog,
                currentValue: newLog.length > 0 ? newLog[0] : 0,
            };
        });
    };

    render() {
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleAdd}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleSubtract}>-</button>
                </div>
                {this.state.log.length !== 0 ? <div className="list-group">
                    {this.state.log.map((value, index) => (
                        <button
                            key={uniqueId()}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.handleRemove(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div> : null
                }
            </div>
        );
    }
}

export default CounterLog;
// END
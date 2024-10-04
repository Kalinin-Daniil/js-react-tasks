import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: []
        };
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { task, tasks } = this.state;
        if (task.trim()) {
            this.setState({
                tasks: [...tasks, { id: uniqueId(), text: task }],
                task: ''
            });
        }
    };

    handleRemove = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }));
    };

    render() {
        const { task, tasks } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={task}
                                onChange={this.handleChange}
                                required
                                className="form-control"
                                placeholder="I am going..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {tasks.map(item => (
                        <Item key={item.id} task={item.text} onRemove={() => this.handleRemove(item.id)} />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
// END

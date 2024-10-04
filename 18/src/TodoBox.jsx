import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
    state = {
        tasks: [],
        newTaskText: '',
    };

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            this.setState({ tasks: response.data });
        } catch (error) {
            console.error(`Error fetching tasks: ${error}`);
        }
    };

    handleInputChange = (event) => {
        this.setState({ newTaskText: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { newTaskText } = this.state;

        if (newTaskText.trim()) {
            try {
                const response = await axios.post('/api/tasks', { text: newTaskText });
                this.setState((prevState) =>
                    update(prevState, {
                        tasks: { $unshift: [response.data] },
                        newTaskText: { $set: '' },
                    })
                );
            } catch (error) {
                console.error(`Error adding task: ${error}`);
            }
        }
    };

    toggleTaskState = async (taskId) => {
        const task = this.state.tasks.find((t) => t.id === taskId);

        if (task) {
            const action = task.state === 'active' ? 'finish' : 'activate';
            try {
                const response = await axios.patch(`/api/tasks/${taskId}/${action}`);
                const index = this.state.tasks.findIndex(t => t.id === taskId);

                this.setState(prevState =>
                    update(prevState, {
                        tasks: { [index]: { $set: response.data } }
                    })
                );
            } catch (error) {
                console.error(`Error updating task state: ${error}`);
            }
        }
    };

    countTasksByType(type) {
        return this.state.tasks.filter(({ state }) => state === type).length;
    }

    render() {
        const { tasks, newTaskText } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex col-md-3">
                            <input
                                type="text"
                                value={newTaskText}
                                onChange={this.handleInputChange}
                                required
                                className="form-control me-3"
                                placeholder="I am going..."
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>

                {this.countTasksByType('active') ? <div className="todo-active-tasks">
                    {tasks.filter(task => task.state === 'active').map(task => (
                        <Item key={task.id} task={task} onToggle={() => this.toggleTaskState(task.id)} />
                    ))}
                </div> : null}

                {this.countTasksByType('finished') ? <div className="todo-finished-tasks">
                    {tasks.filter(task => task.state === 'finished').map(task => (
                        <Item key={task.id} task={task} onToggle={() => this.toggleTaskState(task.id)} />
                    ))}
                </div> : null}
            </div>
        );
    }
}

export default TodoBox;
// END
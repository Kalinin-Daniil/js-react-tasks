import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onToggle }) => {
    return (
        <div className="row" onClick={onToggle}>
            <div className="col-1">{task.id}</div>
            <div className="col">
                {task.state === 'finished' ? (
                    <s><a href="#" className="todo-task">{task.text}</a></s>
                ) : (
                    <a href="#" className="todo-task">{task.text}</a>
                )}
            </div>
        </div>
    );
};

export default Item;
// END

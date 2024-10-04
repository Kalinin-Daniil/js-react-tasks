import React from 'react';

// BEGIN (write your solution here)

class ListGroup extends React.Component {
    render() {

        const { children } = this.props;

        return (
            <ul className="list-group">
                {React.Children.map(children, (child) => (
                    <li className="list-group-item">{child}</li>
                ))}
            </ul>
        );
    }
}

export default ListGroup;

// END

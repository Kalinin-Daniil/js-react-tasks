import React from 'react';

// BEGIN (write your solution here)
class Body extends React.Component {
    render() {
        return (
            <div className="card-body">
                {this.props.children}
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <h4 className="card-title">
                {this.props.children}
            </h4>
        );
    }
}

class Text extends React.Component {
    render() {
        return (
            <p className="card-text">
                {this.props.children}
            </p>
        );
    }
}
class Card extends React.Component {
    static Body = Body;
    static Title = Title;
    static Text = Text;

    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}


export default Card;
// END

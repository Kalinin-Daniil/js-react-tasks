import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened !== undefined ? props.opened : true,
        };
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { text } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        href="#"
                        role="button"
                        aria-expanded={isOpen}
                        data-bs-toggle="collapse"
                        onClick={(e) => {
                            e.preventDefault();
                            this.toggleCollapse();
                        }}
                    >
                        Link with href
                    </a>
                </p>
                <div className={cn('collapse', { show: isOpen })}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        );
    }
}

export default Collapse;
// END

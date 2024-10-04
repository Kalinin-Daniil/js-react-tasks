import React from 'react';
import uniqueId from 'lodash/uniqueId';
import cn from 'classnames';

// BEGIN (write your solution here)
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handlePrev() {
        this.setState((prevState) => ({
            activeIndex:
                (prevState.activeIndex - 1 + this.props.images.length) % this.props.images.length,
        }));
    };

    handleNext() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex + 1) % this.props.images.length,
        }));
    };

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            key={uniqueId('carousel-item-')}
                            className={`carousel-item${activeIndex === index ? ' active' : ''}`}
                        >
                            <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.handlePrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;
// END
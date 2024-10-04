import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const BtnGroup = () => {
    const [activeButton, setActiveButton] = React.useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    let buttonClassnames = cn("btn", "btn-secondary");

    let leftButton = cn(buttonClassnames, "left", {
        active: activeButton === "left"
    });

    let rightButton = cn(buttonClassnames, "right", {
        active: activeButton === "right"
    });

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={leftButton}
                onClick={() => handleClick("left")}
            >
                Left
            </button>
            <button
                type="button"
                className={rightButton}
                onClick={() => handleClick("right")}
            >
                Right
            </button>
        </div>
    );
};

export default BtnGroup;
// END

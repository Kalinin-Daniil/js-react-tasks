import React from 'react';

// BEGIN (write your solution here)

const DefinitionsList = ({ data }) => {
    const elements = [];
    if (data.length > 0) {
        data.forEach((item) => {
            elements.push(
                <React.Fragment key={item.id}>
                    <dt>{item.dt}</dt>
                    <dd>{item.dd}</dd>
                </React.Fragment>
            );
        });
    }

    return elements.length > 0 ? (
        <dl>{elements}</dl>
    ) : null;
};

export default DefinitionsList;

// END

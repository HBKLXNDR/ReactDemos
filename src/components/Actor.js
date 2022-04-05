import React from 'react';

const Actor = ({name, img}) => {
    // const {name, img} = props;
    return (
        <div>
            <h1>{name}</h1>
            <img
                src={img}
                alt={name}/>
        </div>
    );
};

export default Actor;
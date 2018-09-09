import React from 'react';

import './UserOut.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p>I'm Natalie and I am {props.age} years old!</p>
            <p onClick={props.click}>Username: {props.userName}</p>
        </div>
    )
};

export default person;

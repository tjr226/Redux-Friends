import React from 'react';

function Friend(props) {
    return (
        <div>
            {props.name}, {props.age} years old, {props.email}
        </div>
    )
}

export default Friend
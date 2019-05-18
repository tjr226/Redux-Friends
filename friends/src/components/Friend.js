import React from 'react';

class Friend extends React.Component {
    render() {
    return (
        <div>
            {this.props.name}, {this.props.age} years old, {this.props.email}
            <button onClick="">X</button>
        </div>
    )
    }
}

export default Friend
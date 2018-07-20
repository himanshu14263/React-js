import React from 'react';

const UserInput=(props) => {
    return (<div>
        <input placeholder='YOUR NAME' onChange={props.username} />
        <p>{props.children}</p>
    </div>);
}

export default UserInput;
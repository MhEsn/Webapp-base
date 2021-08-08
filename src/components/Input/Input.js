import React from 'react';

function Input(props) {
    return (
        <div>
            <input
                name={props.name}
                type={props.type}
                className={props.class}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </div>
    )
}

export default Input;
import React from 'react';
import Input from '../../components/Input/Input.js';

function CustomInput(props) {
    return (
        <div className={props.containerClass}>
            <label>{props.title}</label>
            <Input class={props.class} name={props.name} type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    )
}

export default CustomInput;
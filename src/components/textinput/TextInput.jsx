import React from 'react';

import './TextInput.css';

export class TextInput extends React.Component {  
    render() {
        const { icon, name, onChange, placeholder, round } = this.props;
        return (
            <label className={round ? "textInput round" : "textInput"}>
                {icon && <img src={icon} alt={placeholder} />}
                <input type="text" name={name} onChange={onChange} placeholder={placeholder} />
            </label>
        );
    }
}

import React from 'react';

import './TextInput.css';

export class TextInput extends React.Component {  
    render() {
        const { icon, name, onChange, placeholder } = this.props;
        return (
            <label className="textInput">
                {icon && <img src={icon} alt={placeholder} />}
                <input type="text" name={name} onChange={onChange} placeholder={placeholder} />
            </label>
        );
    }
}

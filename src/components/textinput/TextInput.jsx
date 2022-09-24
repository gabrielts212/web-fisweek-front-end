import React from 'react';

import './TextInput.css';

export class TextInput extends React.Component {  
    render() {
        const { error, icon, maxLength, name, onChange, placeholder, round, number } = this.props;
        return (
            <label className={round ? "textInput round" : "textInput"}>
                {icon && <img src={icon} alt={placeholder} />}
                <input 
                    type="text" 
                    name={name} 
                    className={error ? "error" : ""} 
                    maxLength={maxLength}
                    onChange={onChange} 
                    placeholder={placeholder} 
                    onKeyPress={number && ((event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      })} />
            </label>
        );
    }
}

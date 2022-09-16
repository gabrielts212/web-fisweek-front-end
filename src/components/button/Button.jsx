import React from 'react';

import './Button.css';

export class Button extends React.Component {  
    render() {
        const { icon, onClick, text, alt } = this.props;
        return (
            <div className={alt ? "button alt" : "button"}>
                <div className="container">
                    {icon && <img src={icon} />}
                    <button onClick={onClick}>{text}</button>
                </div>
            </div>
        );
    }
}

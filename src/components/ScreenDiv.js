import React from 'react';
import './style.css';

export default function ScreenDiv(props) {
    return (
        <div className="screen-display">
            <span>{props.input}</span>
        </div>
    )
}
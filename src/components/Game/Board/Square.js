import React from 'react';

export function Square(props) {
    return (
        <button className={props.extraClass} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

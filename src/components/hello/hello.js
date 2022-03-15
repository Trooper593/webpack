import React from 'react';
import './hello.module.css';

export default function ({name = 'user'}){
    return <div className="box">
        <h2 className="alert">Hello, {name}</h2>
        <p>Welcome to site!</p>
    </div>
}
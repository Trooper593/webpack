import React from 'react';


export default function ({name = 'user'}){
    return <div>
        <h2 className={`my-class`}>Hello, {name}</h2>
        <p>Welcome to site!!!</p>
    </div>
}
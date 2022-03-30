import React from 'react';
const styles = require('./hello.module.css');

console.log(styles);

export const Hello: React.FC<{}> = () => 
    <div>
        <h2 className={`my-class ${styles.default.alert}`}>Hello, </h2>
        <p>Welcome to site!!!</p>
    </div>
;
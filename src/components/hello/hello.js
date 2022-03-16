import React, {useRef, useState, useEffect} from 'react';

export default function ({ min, max, cnt }){

    let [value, setValue] = useState(cnt);

    //вместо этого просто ставим key={pr.cnt} в родительском компоненте
    // useEffect(() => {
    //     setValue(cnt);
    // }, [cnt]);

    return <div>
        <div>min: {min}</div>
        <div>max: {max}</div>
        <div>cnt: {value}</div>
    </div>
}
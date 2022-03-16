import React, {useRef, useState, useEffect} from 'react';

export default function ({ min, max, cnt, onChange}){

    let inp = useRef();

    let updInp = num => {
        inp.current.value = num;
        onChange(num);
    };

    //вместо этого просто ставим key={pr.cnt} в родительском компоненте
    //useEffect(() => updInp(cnt), [cnt]);

    return <div>
        <div>min: {min}</div>
        <div>max: {max}</div>
        <div><input ref={inp} defaultValue={cnt} onChange={(e) => updInp(e.target.value)}/></div>
    </div>
}
import './assets/main.css';
import React from "react";
import ReactDom from 'react-dom';
import AppHello from './components/hello/hello';

document.addEventListener('DOMContentLoaded', function(){
    ReactDom.render(
        <>
            <AppHello />
            <AppHello name="Dmitry"/>
        </>,
        document.querySelector('.app')
    );
})
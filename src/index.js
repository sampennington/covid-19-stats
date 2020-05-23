import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './Main'
import useStats from './useStats'
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <IndexPage />
    </React.StrictMode>,
    document.getElementById('root')
);


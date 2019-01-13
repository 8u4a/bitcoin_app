import React from 'react';
import ReactDOM from 'react-dom';
import CryptoList from './CryptoList'

const App = () => {
    return (
        <div><CryptoList /></div>
    );
}





ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
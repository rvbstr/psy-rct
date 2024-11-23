import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';
import mutsu from'./images/mts.jpg'

function HelloWorld() {
  
  return (<div>
    <img src={mutsu} alt='' className='fullMuts'/>
    <h1 className='spat' >спат</h1>
    </div>
  )
}

function Section() {
  return (
    <section className='testsect'>
      <div>
        <p>well yess</p>
      </div>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

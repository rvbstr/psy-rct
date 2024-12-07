import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styleguide.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';

function IndexPage() {
  
  return (
    Section()
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

function Feature() {
  return (
  <div className="feature">
            <div className="header-group">
                <div className="header">
                    <p className="head">Исследовать <span className="head-italic" id="highlight">себя</span> для лучшего
                        качества жизни</p>
                </div>
                <div className="lead-button-wrapper">
                    <div className="header-lead">
                        <p className="lead">
                            Привет! Я&nbsp;Никита Нечаев, <span className="text-highlight">гештальт-терапевт</span>. Веду
                            индивидуальные консультации онлайн.
                        </p>
                    </div>
                    <a className="button-text" href="#book">
                        <span className="button button-anim">
                            Забронировать сессию
                        </span>
                    </a>
                </div>
            </div>
  </div>
  )
}

//this renders all :))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Feature />
    <IndexPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

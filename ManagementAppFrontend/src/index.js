import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import GlobalStyle from './_fonts&GlobalStyle/globalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginProvider } from './context/login_context';
import { LeadServerProvider } from './context/lead_server_context';


ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
  <LoginProvider>
    <LeadServerProvider>
      <App />
    </LeadServerProvider>
  </LoginProvider>
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider  domain="dev-1tjla2kwo80z63j7.us.auth0.com"
    clientId="wLej2IMdYxz8uNDLu7Y1PsfG0K8di8Pm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
       <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();

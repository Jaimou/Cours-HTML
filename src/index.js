import React from 'react';

import ReactDOM from 'react-dom/client';

// Quand on parle de React c'est plutôt du React pour le web
// donc c'est du ReactDOM
// Alors que le vrai React c'est du ReactNative

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
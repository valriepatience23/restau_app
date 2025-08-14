import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import './index.css'; // à activer si tu utilises ce fichier
// import './main.css';  // idem

import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/Store';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("❌ L'élément avec l'ID 'root' est introuvable dans le fichier index.html");
}

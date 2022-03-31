import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AllProviders from './providers/AllProviders';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <AllProviders>
            <App />
        </AllProviders>
    </React.StrictMode>
);
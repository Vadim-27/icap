import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { store, persistor } from './redux/store';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

          <BrowserRouter basename="icap">
            <App />
          </BrowserRouter>
        
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
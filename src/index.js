import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//импорт компонента Provider
import { Provider } from 'react-redux';
//импорт глобального состояния
import { store, persistor } from './redux/store';
//импорт компонента PersistGate
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);

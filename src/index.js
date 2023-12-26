import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);

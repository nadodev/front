import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './Routes';
import history from './services/history';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes history={history} />
        <ToastContainer autoClose={3000} className="toast-container" />
      </PersistGate>
    </Provider>
  );
}

export default App;

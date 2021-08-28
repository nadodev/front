import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import history from './services/history';

function App() {
  return (
    <>
      <Routes history={history} />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;

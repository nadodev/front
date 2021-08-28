import { BrowserRouter, Switch } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Header from '../components/Header';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import { GlobalStyle } from '../styles/GlobalStyles';
import Registrar from '../pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <MyRoutes path="/" exact component={Login} />
        <MyRoutes path="/register" exact component={Registrar} />
        <MyRoutes path="*" exact component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

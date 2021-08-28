import { BrowserRouter, Switch } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Header from '../components/Header';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import { GlobalStyle } from '../styles/GlobalStyles';
import Registrar from '../pages/Register';
import Funcionarios from '../pages/Funcionarios';
import Avatar from '../pages/Avatar';

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <MyRoutes path="/" exact component={Login} isClosed={false} />
        <MyRoutes path="/register" exact component={Registrar} />
        <MyRoutes
          path="/funcionarios/:id/edit"
          component={Funcionarios}
          isClosed
        />
        <MyRoutes
          path="/funcionarios"
          exact
          component={Funcionarios}
          isClosed={false}
        />
        <MyRoutes path="/avatar/:id" exact component={Avatar} isClosed />
        <MyRoutes path="*" exact component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

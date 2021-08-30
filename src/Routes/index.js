import { BrowserRouter, Switch } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Header from '../components/Header';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import { GlobalStyle } from '../styles/GlobalStyles';
import Registrar from '../pages/Register';
import Funcionarios from '../pages/Funcionarios';
import Avatar from '../pages/Avatar';
import Func from '../pages/Func';
import Home from '../pages/Home';
import Fotos from '../pages/Fotos';

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <MyRoutes path="/" exact component={Home} isClosed={false} />
        <MyRoutes path="/login" component={Login} isClosed={false} />
        <MyRoutes exact path="/func/:id/edit" component={Func} isClosed />
        <MyRoutes exact path="/func" component={Func} />
        <MyRoutes exact path="/fotos/:id" component={Fotos} />
        <MyRoutes path="/register" exact component={Registrar} />
        <MyRoutes path="/register/:id/edit" component={Func} isClosed />
        <MyRoutes
          path="/funcionarios"
          exact
          component={Funcionarios}
          isClosed
        />
        <MyRoutes path="/avatar/:id" exact component={Avatar} isClosed />
        <MyRoutes path="*" exact component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

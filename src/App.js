import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AuthRoute from './components/AuthRoute';
import CartComponent from './components/CartComponent';
import FoodDetail from './components/FoodDetails';
import FooterComponent from './components/Footer';
import GuestRoute from './components/GuestRoute';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';


function App() {
  return (
    <BrowserRouter style={{minHeight: '100%'}}>
      <Layout />
      <div style={{overflow: 'auto', paddingBottom: '90px'}}>
        <Route path={'/'} exact strict component={Home} />
        <GuestRoute path={'/login'} component={Login} />
        <Route path={'/cart'} component={CartComponent} />
        <AuthRoute path={'/profile'} component={Profile} />
        {/* <AuthRoute path={'/register'} component={Register} /> */}
        <Route path={'/register'} component={Register} />
        <Route path={'/food/detail/:id'} component={FoodDetail} />
      </div>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  );
}

export default App;

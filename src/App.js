import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AuthRoute from './components/AuthRoute';
import GuestRoute from './components/GuestRoute';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div>
        <Route path={'/'} exact strict component={Home} />
        <GuestRoute path={'/login'} component={Login} />
        <AuthRoute path={'/profile'} component={Profile} />
        {/* <AuthRoute path={'/register'} component={Register} /> */}
        <Route path={'/register'} component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;

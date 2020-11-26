import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookie from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/index';

const token = cookie.get("token");
const user_id = cookie.get("user_id");

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.get('http://127.0.0.1:8000/api/user/' + user_id ).then(res => {
    console.log(res);
    console.log(token);
    store.dispatch({type: "SET_LOGIN", payload: res})
    render();
  })
  .catch(e => {
    if(e.response.status === 401){
      console.log("hahaha");
      cookie.remove("token");
      cookie.remove("user_id");
    }
    
  })
}else{
  render();
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

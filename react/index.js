import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import store from './store';
import selectedMovie from "./components/selectedMovie"
import Search from "./components/Search"


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Route path="/profile" component={Menu} />
        <Route path="/logout" component={Menu} />
        <Route path="/search" component={Menu} />
        <Route path="/movies" component={Menu} />
      </BrowserRouter>,
  </Provider>

  , document.getElementById('app')
);
   

    
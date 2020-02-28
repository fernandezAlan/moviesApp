import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Search from "../components/Search"
import selectedMovie from "../components/selectedMovie"
import Sidebar from "../components/sidebar"
import Main from "../components/Main"
import Logout from "../containers/Logout"
import Profile from "../components/Profile"

class Menu extends React.Component{
  constructor(props){
    super(props)
  }
  render(props){
    return(
          <div>
          <Sidebar redirect={this.props} />
          <div>
            <Switch>
              <Route path="/profile" component={Profile} />  
              <Route path="/logout" exact component={Logout} />
              <Route path="/movies" exact component={Main} />
              <Route path="/search" exact component={Search} />
              <Route path="/movies/:id" exact component={selectedMovie} />
            </Switch>
          </div>
        </div>
           
        
        
    )

  }
}
export default Menu;
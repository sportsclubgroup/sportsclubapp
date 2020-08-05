import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import Home from './components/Home/Home';
import Club from './components/Club/Club';
import Fixture from './components/Fixture/Fixture';
import Players from './components/Players/Players';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';
import Member from './components/Member/Member';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Footer from './components/Footer/Footer';

import PlayerProfile from './components/Auth/PlayerProfile'

class App extends Component {

  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() { 
    store.dispatch(loadUser());
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <>
        <Provider store={store}>
          <div className="App">
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}
            <main className="main-content">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/club' component={Club} />
                <Route path='/fixture' component={Fixture} />
                <Route path='/players' component={Players} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/contact' component={ContactUs} />
                <Route path='/member' component={Member} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/Auth/PlayerProfile' component={PlayerProfile} />
              </Switch>
            </main>
            <footer> <Footer /> </footer>
          </div>
        </Provider>
      </>
    );
  }
}

export default App;

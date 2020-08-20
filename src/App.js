import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import ProtectedRoute from './components/ProtectedRoute';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// import { loadUser } from './actions/authActions';

import Home from './components/Home/Home';
import Club from './components/Club/Club';
import Fixture from './components/Fixture/Fixture';
import Players from './components/Players/Players';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';
import Feedback from './components/ContactUs/Feedback';
import Displayfeedback from './components/ContactUs/Displayfeedbacks';
import Member from './components/Member/Member';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Footer from './components/Footer/Footer';

import PlayerProfile from './components/Auth/PlayerProfile'

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) { 
  setAuthToken(localStorage.token);
}
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

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
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
                <ProtectedRoute path='/feedback' component={Feedback} />
                <Route path='/display' component={Displayfeedback} />
                <Route path='/member' component={Member} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <ProtectedRoute path='/Auth/PlayerProfile' component={PlayerProfile} />
              </Switch>
            </main>
            <footer> <Footer /> </footer>
          </div>
        </PersistGate>
        </Provider>
      </>
    );
  }
}

export default App;

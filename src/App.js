import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBQ9yDPZkmyLhqtZdjt2Kn4uZPbmLnzVeg',
      authDomain: 'manager-73373.firebaseapp.com',
      databaseURL: 'https://manager-73373.firebaseio.com',
      projectId: 'manager-73373',
      storageBucket: 'manager-73373.appspot.com',
      messagingSenderId: '204293480634'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

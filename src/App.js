import React from 'react';
import './mock/index.js';
import {Provider} from 'react-redux';
import store from './store';
import AuthRoute from './router';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <AuthRoute />
      </Provider>
    </div>
  );
}

export default App;

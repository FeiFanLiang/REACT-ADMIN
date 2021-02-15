import React from 'react';

import {Provider} from 'react-redux';
import store from './store';
import AuthRoute from './router';


function App() {
  var a = store;
  debugger
  return (
    <div className="App">
      <Provider store={store}>
       <AuthRoute />
      </Provider>
    </div>
  );
}

export default App;

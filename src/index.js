import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Fortune from './components/fortune';
import { setLanguage } from './actions';

import store from './store';
import '../styles.css';

ReactDOM.render(  
  <Provider store={store}>
    <Fortune />
  </Provider>,
  document.getElementById('root')
);

// Should output {language: 'en'}
console.log(store.getState());
// Switch to German
store.dispatch(setLanguage('de'));
// Should output {language: 'de'}
console.log(store.getState());



/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import App from './App';
import {name as appName} from './app.json';

const ReduxApp = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);



AppRegistry.registerComponent(appName, () => ReduxApp);

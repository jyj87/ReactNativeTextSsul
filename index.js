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
  // StrictMode 개발환경에서 로그 및 관리를 하기위해서 useEffect 두번 실행함 조사가 필요
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
);



AppRegistry.registerComponent(appName, () => ReduxApp);

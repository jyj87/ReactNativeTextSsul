import {configureStore} from '@reduxjs/toolkit';
import boardReducer from '../reducers/board_reducer';
import searchReducer from '../reducers/search_reducer';
const store = configureStore({
  reducer: {
    board : boardReducer,
    search : searchReducer

  },
});

export default store;
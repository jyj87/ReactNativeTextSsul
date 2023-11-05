import {configureStore} from '@reduxjs/toolkit';
import boardReducer from '../reducers/board_reducer';
import searchReducer from '../reducers/search_reducer';
import rankReducer from '../reducers/rank_reducer';
import homeReducer from '../reducers/home_reducer';
import writeReducer from '../reducers/write_reducer';
import loginReducer from '../reducers/login_reducer';
const store = configureStore({
  reducer: {
    board: boardReducer,
    search: searchReducer,
    rank: rankReducer,
    home: homeReducer,
    write: writeReducer,
    login: loginReducer,
  },
});

export default store;
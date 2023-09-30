import {createSlice} from '@reduxjs/toolkit';
import {log} from '../log/log_c';
import {searchPostList,refreshTampSub3PostSet} from '../data/tempSearchData';

const searchSlice = createSlice({
  name: 'search',
  initialState: {searchPostList: []},
  reducers: {
    getInitSearchPostList: (state, action) => {
      state.searchPostList = searchPostList;
      log.info('searchSlice : getInitSearchPostList\n', state.searchPostList);
    },
    getRefreshData: (state, action) => {
       state.searchPostList = [...state.searchPostList,...refreshTampSub3PostSet]
       log.info('searchSlice : getRefreshData\n', state.searchPostList);
    },

  },
});

export default searchSlice.reducer;
export const {getInitSearchPostList,getRefreshData} = searchSlice.actions;

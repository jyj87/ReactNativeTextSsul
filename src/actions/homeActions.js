import axios from 'axios';
import {HomeEnum} from '../enum/requestConst'
import {GeneralEnum} from '../enum/requestConst'

export const homeActions = type => {
  switch (type) {
    case 'InitPostList':
      console.log('ssssssssssss');
      axios
        .get('home1')
        .then(response => {
          console.log(HomeEnum.INIT_DATA);
          console.log(response.data);
          //　要請が成功したらREDUXを実行
          // dispatch(getInitPostList());
          // dispatch(getInitSearchPostList());
          // dispatch(getInitRankPostList());
        })
        .catch(error => {
          //エラーが発生する時
        });
      break;
    case 'two':
      result = 'two';
      break;
    case 'three':
      result = 'three';
      break;
    default:
  }
};

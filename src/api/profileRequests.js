import axios from 'axios';
import {ProfileEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';

export const profileRequests = async type => {
  switch (type) {
    case ProfileEnum.INIT_MY_POST:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
      case ProfileEnum.INIT_MY_COMMENTS:
        try {
          const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
          console.log(response.data);
          // return response.data
        } catch (error) {
          throw error;
        }
        break;
    default:
      break;
  }
};

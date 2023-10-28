import axios from 'axios';
import {WriteEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';

export const writeRequests = async type => {
  switch (type) {
    case WriteEnum.CREATE_POST:
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

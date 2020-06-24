import { POST } from '../http';
import request from '../request';

export const eg = (data?: object): Promise<any> => {
  return request('StoreApi/Parameters/analysis', data, POST, false);
};

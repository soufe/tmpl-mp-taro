import Taro from '@tarojs/taro';
import { RT, TYPE, POST, ERROR, SUCCESS } from './http';

const interceptor = async function(chain: {
  requestParams: any;
  proceed: (arg0: any) => Promise<any>;
}) {
  const requestParams = chain.requestParams;
  const data = { name: 'frank' };
  const header = {
    client_type: TYPE,
    'content-type': 'application/x-www-form-urlencoded',
  };
  requestParams.data = { ...data, ...requestParams.data };
  requestParams.dataType = 'json';
  requestParams.header = { ...header, ...requestParams.header };
  const res = await chain.proceed(requestParams);
  return res;
};

Taro.addInterceptor(interceptor);
// Taro.addInterceptor(Taro.interceptors.logInterceptor);
// Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

export default async (
  path: string,
  data: object = {},
  method: 'GET' | 'POST' = POST,
  loading: boolean = false,
): Promise<any> => {
  if (loading) Taro.showNavigationBarLoading();
  try {
    const res = await Taro.request({
      url: `${URL}${path}?time=${new Date().getTime()}`,
      data,
      method,
    });
    if (loading) Taro.hideNavigationBarLoading();
    return new Promise((resolve, reject) => {
      if (res.statusCode !== SUCCESS) {
        Taro.showToast({
          title: '服务器开小差了...',
          icon: 'none',
          duration: 2000,
        });
      } else {
        if (res.data.rt === RT) {
          resolve(res.data.data);
        } else {
          switch (res.data.error) {
            case ERROR:
              console.log(ERROR);
              break;
            default:
              reject(res.data.data.message);
          }
        }
      }
    });
  } catch (error) {
    if (loading) Taro.hideNavigationBarLoading();
    console.log(error);
  }
};

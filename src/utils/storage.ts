import Taro from '@tarojs/taro';

export const set = (key: string, val: any): void => {
  try {
    Taro.setStorageSync(key, val);
  } catch (e) {
    console.log(e);
  }
};

export const get = (key: string): void => {
  try {
    return Taro.getStorageSync(key);
  } catch (e) {
    console.log(e);
  }
};

export const remove = (key: string): void => {
  try {
    Taro.removeStorageSync(key);
  } catch (e) {
    console.log(e);
  }
};

export const clear = (): void => {
  try {
    Taro.clearStorageSync();
  } catch (e) {
    console.log(e);
  }
};

import Taro from '@tarojs/taro';

export const system = () => {
  try {
    const res = Taro.getSystemInfoSync();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const isIphoneX = (): boolean => {
  const { model } = Taro.getSystemInfoSync();
  return model.includes('iPhone X') || model.includes('iPhone 1');
};

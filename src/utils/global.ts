const globalData: object = {};

export const set = (key: string, val: any): void => {
  globalData[key] = val;
};

export const get = (key: string): void => {
  return globalData[key];
};

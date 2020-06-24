import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

function Hooks() {
  return (
    <View>
      <View>hooks</View>
    </View>
  );
}

export default Hooks;

Hooks.config = {
  navigationBarTitleText: 'hooks',
};

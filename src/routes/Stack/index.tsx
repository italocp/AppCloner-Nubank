import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from './Models';

import Home from '../../screens/Home';
import Pix from '../../screens/Pix';
import Transfer from '../../screens/Transfer';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Pix" component={Pix} />
      <Screen name="Transfer" component={Transfer} />
    </Navigator>
  );
}

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';


import Test from './components/test';
import Login from './components/Login';

export default function Drawer() {

const Drawer = createDrawerNavigator();

  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Test}/>
      </Drawer.Navigator>
    </NavigationContainer>   
  );
}


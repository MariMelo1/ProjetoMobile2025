import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from './components/test';
import Login from './components/Login';

export default function App() {

const BottomTab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Login' component={Login}/>
        <BottomTab.Screen name='Home' component={Test}/>
      </BottomTab.Navigator>
    </NavigationContainer>

    
  );
}


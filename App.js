import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from './components/test';
import Login from './components/Login';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {

const BottomTab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <BottomTab.Navigator 
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor:'#841584',
        tabBarActiveBackgroundColor:'#d6b6cb',
        tabBarInactiveBackgroundColor: '#e6e1aa',
        tabBarInactiveTintColor: '#6e424b',
        headerStyle:{backgroundColor: '#d6b6cb'},
        headerTintColor: '#841584',
        // headerTitleAlign: 'center'

      }}
      >
        <BottomTab.Screen name='Home' component={Test}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#FF007F" />
          ),
        }} />

        <BottomTab.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={30} color="#FF007F" />
          ),
        }}
        
        />
        
      </BottomTab.Navigator>
    </NavigationContainer>   
  );
}


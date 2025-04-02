import 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/home';
import Login from './Screens/Login';
import Feed from './Screens/feed';
import Counter from './Screens/counter';

function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'#6e424b',
      tabBarActiveBackgroundColor:'#d6b6cb',
      headerStyle:{backgroundColor: '#d6b6cb'},
      headerTintColor: '#841584',

    }}>
      <BottomTab.Screen name='Home' component={Home}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="home" size={30} color="#FF007F" />
        ),
      }} />
      <BottomTab.Screen name='Feed' component={Feed}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="feed" size={30} color="#FF007F" />
        )
      }} />
      <BottomTab.Screen name='Counter' component={Counter}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="123" size={30} color="#FF007F" />
       
        )
      }} />
    </BottomTab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}/>

      </Stack.Navigator>    
    </NavigationContainer>   
  );
}


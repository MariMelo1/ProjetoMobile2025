import {Favorites, Profile} from "./components/gallery";
import Test from "./components/test";
import {View, StyleSheet} from 'react-native';

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Test/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

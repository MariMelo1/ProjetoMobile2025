import {Favorites, Profile} from "./components/gallery";
import {View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Favorites/>
      <Profile/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

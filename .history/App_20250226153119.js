import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = Stylesheet.create({
  container:{
    flex:1,
    backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center"
  }
})

import {View, Text, Stylesheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = Stylesheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContente: 'center'
  }
})

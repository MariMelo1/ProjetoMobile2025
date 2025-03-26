import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from "./components/Profile";

export default function App() {
  return (
    <Profile/>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center"
  }
})

import { profile } from 'console';
import {Text, View, StyleSheet} from 'react-native';
export function Profile(){
    return(
        <View style={styles.profile}>
            <Text>Oi pexoau, esse é o meu perfil!!</Text>
        </View>
    )
}
export function Favorites(){
    return(
        <View style={styles.favorites}>
        <Text>Oi pexoau, esse é o meu favoritos!!</Text>
    </View>
    )
}
export default function Gallery() {
    return (
         <View style={styles.container}>
            <Profile/>
            <Favorites/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ea3c79',
    },
    profile:{
        flex:3,
    },
    favorites:{
        flex: 3,
    }
})
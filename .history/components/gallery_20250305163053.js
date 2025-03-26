import {Text, View, StyleSheet, Image} from 'react-native';
export function Profile(){
    return(
        <View style={styles.profile}>
            <Text>Oi pexoau, esse é o meu perfil!!</Text>
            <Text>bla bla bla bla</Text>

            <Image style={{width: 40, height: 40}} source={{uri: 'assets:/giffofo.gif'}} />

        </View>
    )
}
export function Favorites(){
    return(
        <View style={styles.favorites}>
        <Text>Oi pexoau, esse é o meu favoritos!!</Text>
        <Text>bla bla bla bla</Text>

        <Image style={styles.img} source={{uri:'https://i.gifer.com/7qJ.gif'}}/>
    </View>
    )
}
export default function Gallery() {
    return (
         <View style={styles.container}>
            <Text>Oi pexoau, esse é o gallery </Text>
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
        backgroundColor:'#EA1'
    },
    favorites:{
        flex:1,
        backgroundColor: '#A12'
    },
    img:{
        width: 100,
        height: 100,
    }
})
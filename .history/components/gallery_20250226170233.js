import {Text, View, StyleSheet} from 'react-native';


export function Profile(){
    return(
        <View style={styles.container}>
            <Text>Oi pexoau, esse é o meu perfil!!</Text>
        </View>
    )
}

export default function Gallery() {
    return (
        <Profile/>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ea3c79',
    }
})
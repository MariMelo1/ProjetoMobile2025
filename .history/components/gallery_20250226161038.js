import {Text, View, StyleSheet} from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Oi pexoau!!</Text>
        </View>
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
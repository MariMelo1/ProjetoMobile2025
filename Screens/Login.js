
import { View, TextInput, Button,Text, StyleSheet,} from "react-native"

export default function Login({navigation}){
    return(
        <View style={styles.container} >
            <Text>LOGIN</Text>

            <TextInput
            style={styles.input}
            placeholder="Nome"
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            />
            <Button
            color={'#FF007F'}
            title="Login"
            onPress={() => navigation.navigate('HomeTab')}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-around',
     
    
    },
    input:{
        borderWidth: 1,
        borderColor: '#FF007F'
    }
})
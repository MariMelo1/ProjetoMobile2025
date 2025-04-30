
import { View, TextInput, Button,Text, StyleSheet,} from "react-native"
import {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../controller";

export default function Register({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('erro', error.message);
           
          });
    }

    return(
        <View style={styles.container} >
            <Text>CADASTRO</Text>

            <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            />
            <Button
            color={'#FF007F'}
            title="Cadastrar"
            onPress={cadastroUser}
        
            />
            <Button
            color={'#FF007F'}
            title="Login"
            onPress={() => navigation.navigate('Login')}
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
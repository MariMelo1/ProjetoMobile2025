
import { View, TextInput, Button,Text, StyleSheet, TouchableOpacity,} from "react-native"
import {useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../controller";

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const VerificaUser = () => {
        signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
            console.log('usuario logado', userCredential.user.email);
            navigation.navigate('HomeTab');
        })
        .catch((error) => {
            console.log('erro ao logar', error.message);
          });
        
    }

    return(
        <View style={styles.container} >
            <Text>LOGIN</Text>
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
            title="Entrar"
            onPress={VerificaUser}
           
            />
            {/* <Button
            color={'#FF007F'}
            title="Cadastre-se"
            onPress={() => navigation.navigate('Cadastro')}
            /> */}
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.txtcadast}>Cadastre-se</Text>
            </TouchableOpacity>
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
    },
    txtcadast:{
        fontSize: 20,
        color: '#FF007F',
    }
})
import {View, Text,  StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function Counter (){
    
    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    
    function Aumentar (){
        setContador(contador + 1)
    }

    function Diminuir (){
        if (contador>0){
        setContador(contador - 1)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contador da Mari</Text>
            <Text>Contador: {contador} </Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.botao} onPress={Aumentar}>
                    <Text style={styles.txtBotao} >+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}  onPress={Diminuir}>
                    <Text style={styles.txtBotao} >-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewInput} >
                <TextInput
                placeholder='Nome'
                placeholderTextColor={'#FF007F'}
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                />

                <TextInput
                placeholder='Email'
                placeholderTextColor={'#FF007F'}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                />
            </View>
            <Text>Oi, {nome}, seu email é {email}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    title:{
        fontSize: 40,
        color:'#FF007F',
    },
    row:{
        width: '20%',
        flexDirection:'row',
        justifyContent: 'space-around'
    }, 
    botao:{
        backgroundColor: '#FF007F',
        width: '30%', 
        borderRadius: '10%',
    }, 
    txtBotao:{
        textAlign: 'center',
        color: 'white'
    },
    viewInput:{
        //backgroundColor: 'orange',
        height: '20%',
        justifyContent: 'space-around'
    },
    input:{
        borderWidth: 1,
        borderColor: '#FF007F',
        borderRadius: 10,
        textAlign: 'center'
    }
  
})
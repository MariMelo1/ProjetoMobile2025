
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { db } from '../controller';
import { collection, addDoc } from 'firebase/firestore';

export default function AddProduct(){

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");
    
    const CadastrarProduto = async () => {
        try{
            await addDoc(collection(db, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome('');
            setValor(''),
            setImagem('')
        }
        catch (error){
            console.log('erro no cadastro do produto', error)
        }           
    }

    return(  
        <View style={styles.container} >
            <Text>ADICIONAR PRODUTOS</Text>
            <TextInput
            style={styles.input}
            placeholder="Nome produto"
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            style={styles.input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            />
            <TextInput
            style={styles.input}
            placeholder="Imagem"
            value={imagem}
            onChangeText={setImagem}
            /> 

            <Button
            color={'#FF007F'}
            title="Cadastrar"
            onPress={CadastrarProduto}
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
    },
    txtcadast:{
        fontSize: 20,
        color: '#FF007F',
    }
})
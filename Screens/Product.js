import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import { useState, useEffect } from 'react';
import Card from '../components/card';
import {db} from '../controller';
import { collection, getDocs } from 'firebase/firestore';

export default function Product(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(db,'produtos'));
                const lista = [];
                querySnapshot.forEach((doc)=>{
                    lista.push({id:doc.id, ...doc.data()});
                });
                setProdutos(lista);
            } catch (error){
                console.log('erro ao buscar produtps:', error);
            }  
        }
        carregarProdutos();
    }, []);


    return(
        <View style={styles.container}>
            {/* array com map
            <Text style={styles.text}>Lista de Produtos</Text>
            {produtos.map((item) => (
                <Text style={styles.txtprod}>
                {item.nome} - R$ {item.valor}
                </Text>
            ))} */}
            <Text style={styles.text}>Lista de Produtos</Text>
            <FlatList
            data = {produtos}
            renderItem={({item}) => (
                <Card
                nome={item.nome}
                valor={item.valor}
                imagem={item.imagem}
                />
            )}
            keyExtractor={item => item.id}
            />    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    },
    text:{
        fontSize: 30,
        color: '#FF007F',
        textAlign: 'center'
    },
})
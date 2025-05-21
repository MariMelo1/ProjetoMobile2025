import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import { useState, useEffect } from 'react';
import Card from '../components/card';
import {db} from '../controller';
import { collection, getDocs } from 'firebase/firestore';
import { useCarrinho } from '../components/ProviderCart';

export default function Product({navigation}){
    const [produtos, setProdutos] = useState([]);
    const {adicionarProduto} = useCarrinho();

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
            <Text style={styles.text}>Lista de Produtos</Text>
            <FlatList
            data = {produtos}
            renderItem={({item}) => (
                <Card
                nome={item.nome}
                valor={item.valor}
                imagem={item.imagem}
                comprar={() => {
                    adicionarProduto(item);
                    navigation.navigate('carrinho');
                }}
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
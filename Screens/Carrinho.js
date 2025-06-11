import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import { useCarrinho } from '../components/ProviderCart';

import Card from '../components/card';

export default function Carrinho(){
    const {carrinho, removerProduto} = useCarrinho();
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Carrinho </Text>
            <FlatList
            data={carrinho}
            renderItem={({item, index}) => (
                <Card
                nome={item.nome}
                valor={item.valor}
                imagem={item.imagem}
                remover={() => removerProduto(index)}

                />
            )}
            /> 
        </View>
        )
    }
        
const styles = StyleSheet.create({ 
    container:{
        flex: 1
    },
    text:{
        fontSize: 30,
        color: '#FF007F',
        textAlign: 'center'
    },
    card:{
        padding:10,
        margin: 10,
        backgroundColor: '#f4f4',
        borderRadius:8,
        alignItems: 'center'
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 5
    },
    txtprod:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    }
})
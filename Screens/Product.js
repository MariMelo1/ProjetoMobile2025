import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import { useState } from 'react';
import Card from '../components/card';

export default function Product(){
    const [produtos, setProdutos] = useState([
        {id:1, nome: 'Camiseta', valor: 99.99, imagem: 'https://anarhu.cdn.magazord.com.br/img/2023/08/produto/4282/camiseta-branca-anarhu.jpg?ims=fit-in/635x865/filters:fill(white)'},
        {id:2, nome:'Moletom', valor: 159.90, imagem: 'https://www.kacewear.com.br/cdn/shop/products/Moletom_Canguru_com_Capuz_Ferrugem_Logo_Bordada_Kace_Frente.png?v=1670023792'},
        {id:3, nome:'Tênis', valor: 89.90, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-vizzano-branco-feminino-1307-206-16507-76969/301810-1.jpg?w=670&h=670&v=no-change&qs=ignore'},
        {id:4, nome:'Calça', valor: 250.00, imagem: 'https://blacktarg.cdn.magazord.com.br/img/2021/11/produto/157/calca-jogger-tactel-dread-texas-masculina-1.jpg?ims=fit-in/425x635/filters:fill(white)'}
    ])

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
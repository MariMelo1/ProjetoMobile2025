import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Card({nome, valor, imagem, comprar, remover}){
    return(
         <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}} />
            <Text style={styles.txtprod}>{nome}</Text>
            <Text style={styles.txtprod}>R$ {valor}</Text>
            {comprar && <Button title='Comprar' onPress={comprar} color={'#841584'}/>}
            {remover && <Button title='Remover' onPress={remover} color={'#841584'}/>}
        </View>
    )
}

const styles = StyleSheet.create({ 
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
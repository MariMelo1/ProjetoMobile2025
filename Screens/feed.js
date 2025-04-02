import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

export default function Feed (){
    return(
        <View style={styles.container}>
            <ScrollView> 
            <Text style={styles.title}>Feed da Mari</Text>
            <Text>🌟 Transforme seu dia com pequenas atitudes! 🌟</Text>
            <Text>Às vezes, a felicidade não está em grandes conquistas, mas nas pequenas ações diárias. 💫 Seja um sorriso sincero, um gesto de carinho, ou até mesmo um tempo para si mesmo. É isso que faz o dia ser especial!</Text>
            <Text>Hoje, reserve um momento para refletir sobre o que te faz bem. ❤️ A vida é feita de momentos simples, e são eles que tornam tudo mais valioso. ✨</Text>

            <Image style={styles.img} source={{uri:'https://kardecriopreto.com.br/wp-content/uploads/2018/02/o-FELICIDADE-facebook.jpg'}} />

            <Button 
            title='Saiba Mais'
            color={'#FF007F'}
            />



        <Text style={styles.title}>Feed da Mari</Text>
            <Text>🌟 Transforme seu dia com pequenas atitudes! 🌟</Text>
            <Text>Às vezes, a felicidade não está em grandes conquistas, mas nas pequenas ações diárias. 💫 Seja um sorriso sincero, um gesto de carinho, ou até mesmo um tempo para si mesmo. É isso que faz o dia ser especial!</Text>
            <Text>Hoje, reserve um momento para refletir sobre o que te faz bem. ❤️ A vida é feita de momentos simples, e são eles que tornam tudo mais valioso. ✨</Text>

            <Image style={styles.img} source={{uri:'https://kardecriopreto.com.br/wp-content/uploads/2018/02/o-FELICIDADE-facebook.jpg'}} />

            <Button 
            title='Saiba Mais'
            color={'#FF007F'}
            />

        </ScrollView>
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
    img :{
        width:400,
        height: 200
    }
})
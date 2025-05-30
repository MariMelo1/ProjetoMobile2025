import { View, Text, Image,StyleSheet} from "react-native"


export default function Test(){
    return(
        <View style={styles.container}>
            <Text>Dogs</Text>
            <View style={styles.dogs} >
                
                <Image style={styles.img} source={{uri:'https://blog-static.petlove.com.br/wp-content/uploads/2017/06/filhotes-fofos-5.gif'}}/>
                <Image style={styles.img} source={{uri:'https://blog-static.petlove.com.br/wp-content/uploads/2017/06/filhotes-fofos-5.gif'}}/>
            </View>
            <View>
                <Text>Cats</Text>
                <Image style={styles.img} source={{uri:'https://blog-static.petlove.com.br/wp-content/uploads/2017/06/filhotes-fofos-5.gif'}}/>
                <Image style={styles.img} source={{uri:'https://blog-static.petlove.com.br/wp-content/uploads/2017/06/filhotes-fofos-5.gif'}}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ea3c79',
        
    }, 
    img:{
        height:100,
        width: 100,
    },
    dogs:{
        flexDirection: 'row',
    }
})
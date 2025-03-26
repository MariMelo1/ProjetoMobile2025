import { View, Text, Image } from "react-native"


export default function Test(){
    return(
        <View>
            <View>
                <Text>Dogs</Text>
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
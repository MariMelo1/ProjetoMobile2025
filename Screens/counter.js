import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

export default function Counter (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contador da Mari</Text>
            <Text>Contador: </Text>

            <Button 
            title='+'
            color={'#FF007F'}
            />
            <Button
            title='-'
            color={'#FF007F'}
            />
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
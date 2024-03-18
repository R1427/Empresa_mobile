import React from "react";
import { View, 
         Text,
         StyleSheet,
         Image,
         TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
const navigation = useNavigation();


    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/bico1.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Peça seu serviço</Text>
                <Text style={styles.text}>Faça seu Login</Text>


                <TouchableOpacity 
                style={styles.button }
                onPress={ () => navigation.navigate('Signin')}
                >
                    <Text style={styles.buttontext}>Acessar</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: ' #38A69D'
    },
    containerLogo:{
        flex:2,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'


    },

    containerForm:{
        flex:1, 
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',


    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },

    text:{
        color: '#a1a1a1'
    },

    button:{
        position: 'absolute',
        backgroundColor: '#38A69D',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },

    buttontext:{
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    }
})
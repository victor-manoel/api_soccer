import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image} from 'react-native';

interface LeagueProps extends TouchableOpacityProps {
    name: string;
    uri: string;
}

export function Standings({name, uri, ...rest}: LeagueProps){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
             <View style={styles.imageContainer}>
                 <Image style={styles.image} source={{uri}}/>
             </View>
                 <Text style={styles.textButton}>{name}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    button: {
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 1,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '99%',
    },
    textButton: {
        padding: 7,
        alignSelf: 'center',
        fontSize: 11,
        fontWeight: 'bold',
        color: 'black',
    },
    image: {
        width: 30,
        height: 30,
    },
    imageContainer: {
        borderRadius: 50,
        width: '10%',
        height: '90%',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
})
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image} from 'react-native';

interface CountryProps extends TouchableOpacityProps {
    name: string;
    uri: string;
}

export function Countries({name, uri, ...rest}: CountryProps){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <View style={styles.name}>
                    <Text style={styles.textButton}>{name}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri}}/>
                </View>
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
        marginVertical: 8,
        marginHorizontal: 1,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '99%',
    },
    textButton: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 45,
        height: 45,
    },
    imageContainer: {
        borderRadius: 50,
        width: '17%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    name: {
        width: '60%',
    }
})
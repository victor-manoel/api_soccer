import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image} from 'react-native';

interface LeagueProps extends TouchableOpacityProps {
    name: string;
    uri: string;
    games: string;
    goalsDif: string;
    points: string;
    rank: string;
}

export function Standings({name, uri, games, goalsDif, points, rank, ...rest}: LeagueProps){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.textButton}>{rank}</Text>
             <View style={styles.imageContainer}>
                 <Image style={styles.image} source={{uri}}/>
             </View>
                 <Text style={styles.textButton}>{name}</Text>
                 <Text style={styles.textButton}>{games}</Text>
                 <Text style={styles.textButton}>{goalsDif}</Text>
                 <Text style={styles.textButton}>{points}</Text>
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
        justifyContent: 'center',
        width: '100%',
        height: '99%',
    },
    textButton: {
        justifyContent: 'space-between',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 20,
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
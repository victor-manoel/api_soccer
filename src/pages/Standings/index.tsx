import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Standings} from '../../components/StandingsList';

import {Container} from './styles';

import axios from "axios";

type League = {
    name: string;
    id: string;
    logo: string;
    standings: string;
    home: string;
    team: string;
    league: string;
}

export default function(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<League[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {season: '2022', league: "39",},
            headers: {
              'X-RapidAPI-Key': 'f500032209mshc016268ad53aa50p1f85d0jsn056aabbd7f29',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          axios.request(options)
          .then(response => {
            
            if(response.data) {
            const [standings] = response.data.response 
            const setData = standings.flatMap((item) => item)
            }
            console.log(setData)
          })
          .catch(function (error) {
              console.error(error);
          });
    }, []
    )

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.siglasView}>
                <Text style={styles.textSiglas}>Position</Text>
                <Text style={styles.textSiglas}>Teams</Text>
                <Text  style={styles.textSiglas}>Games</Text>
                <Text  style={styles.textSiglas}>GoalsDif</Text>
                <Text  style={styles.textSiglas}>Points</Text>
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.league.id}
                    renderItem={({item}) => {
                        return <Standings
                        rank={item.league.standings[0][1]?.rank}
                        uri={item.league.standings[0][1]?.team?.logo} 
                        name={item.league.standings[0][1]?.team?.name} 
                        games={item.league.standings[0][1]?.all?.played}
                        points={item.league.standings[0][1]?.points}
                        goalsDif={item.league.standings[0][1]?.goalsDiff}
                        />
                    }}
                /> 
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFF',
        marginBottom: 5,
    },
    siglasView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#CCC',
        width: '100%',
        height: '5%',
    },
    textSiglas: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    flatlistContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
})

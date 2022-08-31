import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Standings} from '../pages/Standings';

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
            console.log(response.data.response)
            setData(response.data.response)
          })
          .catch(function (error) {
              console.error(error);
          });
    }, []
    )

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.league.id}
                renderItem={({item}) => {
                    return <Standings name={item.league.name}/>
                }}
            /> 
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginBottom: 5,
    }
})

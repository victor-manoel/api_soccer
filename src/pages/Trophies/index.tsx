import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Trophies} from '../../components/TrophiesList';

import {Container} from './styles';

import axios from "axios";

type Trophy = {
    name: string;
    id: string;
    player: string;
    season: string;
}

export default function (){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Trophy[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/trophies',
            params: {player: '276'},
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
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return <Trophies name={item.league} season={item.season}/>
                }}
            /> 
        </Container>
    )
}

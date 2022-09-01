import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Leagues} from '../../components/LeaguesList';

import {Container} from './styles';

import axios from "axios";

type League = {
    name: string;
    id: string;
    league: string;
    logo: string;
}

export default function(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<League[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {season: '2022', current: 'true', type: 'league'}, 
            headers: {
              'X-RapidAPI-Key': 'f500032209mshc016268ad53aa50p1f85d0jsn056aabbd7f29',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options)
          .then(response => {
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
                keyExtractor={(item) => item.league.id}
                renderItem={({item}) => {
                    return <Leagues name={item.league.name} uri={item.league.logo}/>
                }}
            /> 
        </Container>
    )
}

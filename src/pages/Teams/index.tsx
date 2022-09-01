import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Leagues} from '../../components/LeaguesList';

import {Container} from './styles';

import axios from "axios";

type Team = {
    name: string;
    id: string;
    team: string;
    logo: string;
}

export default function Teams(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Team[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
            params: {id: '33'},
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
                keyExtractor={(item) => item.team.id}
                renderItem={({item}) => {
                    return <Leagues name={item.team.name} uri={item.team.logo}/>
                }}
            /> 
        </Container>
    )
}

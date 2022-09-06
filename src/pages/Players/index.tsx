import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Leagues} from '../../components/LeaguesList';

import {Container} from '../Render/styles';

import axios from "axios";

type Player = {
    name: string;
    id: string;
    player: string;
    logo: string;
}

export default function Players({route}){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Player[]>([]);

    const id = route.params.id;

    useEffect(() => {
        if(id){
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {team: id, season: '2022'},
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
        }
    }, [id]
    )

    return(
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item) => item.player.id}
                renderItem={({item}) => {
                    return <Leagues name={item.player.firstname} uri={item.player.photo}/>
                }}
            /> 
        </Container>
    )
}

import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image, FlatList } from "react-native";
import { Standings } from "../../types";

import {Leagues} from '../../components/LeaguesList';

import {Container} from './styles';

import axios from "axios";

type Player = {
    name: string;
    id: string;
    player: string;
    logo: string;
}

export default function Render({route}) {

  const id = route.params.id;

  const { params } = useRoute();
  const [data, setData] = useState<Standings>(params as Standings);
  const [dataPlayer, setDataPlayer] = useState<Player[]>([]);

  useEffect(() => {
    if(id){
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {player: id, season: '2022'},
        headers: {
          'X-RapidAPI-Key': 'f500032209mshc016268ad53aa50p1f85d0jsn056aabbd7f29',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options)
      .then(response => {
        console.log(response.data.response)
        setDataPlayer(response.data.response)
      })
      .catch(function (error) {
          console.error(error);
      });
    }
}, [id]
)

  return (
    <>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Rank: {data.rank}</Text>
      <Text>Nome: {data.team.name}</Text>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{ uri: data.team.logo }}
      />
      <Text>Jogos: {data.all.played}</Text>
      <Text>Gols: {data.goalsDiff}</Text>
      <Text>Pontos: {data.points}</Text>
      <Text>id: {data.team.id}</Text>
    </View>

      <Container>
      <FlatList
          data={dataPlayer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
              return <Leagues name={item.player.firstname} uri={item.player.photo}/>
          }}
      /> 
      </Container>
</>
  );
}

import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Leagues } from "../../components/LeaguesList";

import { Container, SearchContainer, Search, DataContainer } from "./styles";

import axios from "axios";

import { MaterialCommunityIcons } from '@expo/vector-icons';

type League = {
  name: string;
  id: string;
  league: string;
  logo: string;
};

export default function () {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<League[]>([]);
  const [searchLeague, setSearchLeague] = useState('');
  const [searchData, setSearchData] = useState(data);

  useEffect(() => {
    (async () => {
      const options = {
        method: "GET",
        url: "https://api-football-v1.p.rapidapi.com/v3/leagues?current=true",
        params: { season: "2022", type: "league" },
        headers: {
          "X-RapidAPI-Key": "f500032209mshc016268ad53aa50p1f85d0jsn056aabbd7f29",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data.response);
          setData(response.data.response);
        })
        .catch(function (error) {
          console.error(error);
        });
    })();
  }, []);



  useEffect(() => {
    if(searchLeague === '') {
      setSearchData(data);
    } else {
      setSearchData(
        data.filter((item)=> {
          if(item.name.indexOf(searchLeague) > -1){
            return true;
          } else {
            return false;
          }
        })
      )
    }
  }, [searchLeague])

  //

  const handleNavigation = (id: number) => navigate("Standings", { id });

  return (
    <Container>
      <SearchContainer>
        <Search 
          placeholder="Pesquise uma Liga"
          placeholderTextColor="#888"
          value={searchLeague}
          onchangeText={(text) => setSearchLeague(text)}
        />
      </SearchContainer>
      <DataContainer>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <Leagues
                  onPress={() => handleNavigation(item.league.id)}
                  name={item.league.name}
                  uri={item.league.logo}
                />
              );
            }}
          />
        </DataContainer>
  
    </Container>
  );
}

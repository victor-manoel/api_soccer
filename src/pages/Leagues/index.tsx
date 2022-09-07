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
import api from "../../services";

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
        try {
          const response = await api.get("/v3/leagues?current=true",{
            params: {
              season: "2022",
              type: "league",
            },
          });
          
            console.log(response.data.response);
            setData(response.data.response);

      } catch(error) {
          console.log(error)
      }
    })();
  }, []);



  useEffect(() => {
    if(searchLeague === '') {
      setSearchData(data);
    } else {
      setSearchData(
        data.filter((item)=> (item.league.name.toLowerCase().indexOf(searchLeague.toLowerCase()) > -1))
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

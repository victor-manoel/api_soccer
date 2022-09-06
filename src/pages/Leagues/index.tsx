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

import { Container } from "./styles";

import axios from "axios";

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

  useEffect(() => {
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
  }, []);

  //

  const handleNavigation = (id: number) => navigate("Standings", { id });

  return (
    <Container>
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
    </Container>
  );
}

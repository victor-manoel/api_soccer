import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { StandingsList } from "../../components/StandingsList";
import { Container, LettersView, LettersText, DataContainer } from "./styles";
import api from "../../services";
import { Standings } from "../../types";

type League = {
  name: string;
  id: string;
  logo: string;
  standings: string;
  home: string;
  team: string;
  league: string;
};

export default function ({route}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Standings[]>([]);
  const { navigate } = useNavigation();

  const id = route.params.id;

  useEffect(() => {
    if(id){
    (async () => {
      const response = await api.get("/v3/standings",{
        params: {
          season: "2022",
          league: id,
        },
      });
      const data = response.data.response[0].league;
      if (data) {
        const { standings } = data;
        const standing: Standings[] = standings.flatMap(
          (it: Standings[]) => it
        );
        setData(standing);
      }
    })();

    }
  }, [id]); 


  const handleNavigation = (id: number) =>
    navigate("Players", {id});

  return (
    <Container>
      <LettersView>
        <LettersText>Position</LettersText>
        <LettersText>Teams</LettersText>
        <LettersText>Games</LettersText>
        <LettersText>GoalsDif</LettersText>
        <LettersText>Points</LettersText>
      </LettersView>
      <DataContainer>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <StandingsList
                onPress={() => handleNavigation(item.team.id)}
                data={item}
              />
            );
          }}
        />
      </DataContainer>
    </Container>
  );
}

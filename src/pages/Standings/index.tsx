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
import { Container } from "./styles";
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


  const handleNavigation = (standing: Standings) =>
    navigate("Render", standing);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.siglasView}>
        <Text style={styles.textSiglas}>Position</Text>
        <Text style={styles.textSiglas}>Teams</Text>
        <Text style={styles.textSiglas}>Games</Text>
        <Text style={styles.textSiglas}>GoalsDif</Text>
        <Text style={styles.textSiglas}>Points</Text>
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <StandingsList
                onPress={() => handleNavigation(item)}
                data={item}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginBottom: 5,
  },
  siglasView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#CCC",
    width: "100%",
    height: "5%",
  },
  textSiglas: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  flatlistContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

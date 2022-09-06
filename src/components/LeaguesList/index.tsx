import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from "react-native";

interface LeagueProps extends TouchableOpacityProps {
  name: string;
  uri: string;
}

export function Leagues({ name, uri, ...rest }: LeagueProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...rest} style={styles.button} activeOpacity={0.8}>
        <View style={styles.name}>
          <Text style={styles.textButton}>{name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri }} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90EE90",
    padding: 5,
    paddingHorizontal: 18,
  },
  button: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  textButton: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 45,
    height: 45,
  },
  imageContainer: {
    borderRadius: 50,
    width: "17%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  name: {
    width: "60%",
  },
});

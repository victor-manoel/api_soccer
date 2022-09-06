import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Container, TextButton, Image, ImageContainer, NameContainer, } from "./styles";

interface LeagueProps extends TouchableOpacityProps {
  name: string;
  uri: string;
}

export function Leagues({ name, uri, ...rest }: LeagueProps) {
  return (
    <Container>
      <TouchableOpacity {...rest} style={styles.button} activeOpacity={0.8}>
        <NameContainer>
          <TextButton>{name}</TextButton>
        </NameContainer>
        <ImageContainer>
          <Image source={{ uri }} />
        </ImageContainer>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({

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

});

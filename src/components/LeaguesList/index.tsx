import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Container, Button, TextButton, Logo, ImageContainer, NameContainer, } from "./styles";

interface LeagueProps extends TouchableOpacityProps {
  name: string;
  uri: string;
}

export function Leagues({ name, uri, ...rest }: LeagueProps) {
  return (
    <Container>
      <Button {...rest} activeOpacity={0.8}>
        <NameContainer>
          <TextButton>{name}</TextButton>
        </NameContainer>
        <ImageContainer>
          <Logo source={{ uri }} />
        </ImageContainer>
      </Button>
    </Container>
  );
}



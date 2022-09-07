import React from 'react';

import Lottie from 'lottie-react-native';

import { useNavigation, useRoute } from "@react-navigation/native";

import soccer from '../../assets/soccer.json';

import {Container, TextContainer, TitleTwo, Title, Image, ButtonView, Button, ButtonText} from "./styles";


export default function Welcome() {

const { navigate } = useNavigation();

const handleNavigation = () => navigate("Leagues");

 return (
  <Container>
    <TextContainer>
      <Title >Bem-Vindo</Title>
      <TitleTwo>Prossiga para ter acesso as informações da sua equipe</TitleTwo>
    </TextContainer>

    <Image>
      <Lottie resizeMode="contain" source={soccer} autoPlay loop/>
    </Image>

    <ButtonView>
      <Button activeOpacity={0.5} onPress={handleNavigation}>
        <ButtonText>Acessar</ButtonText>
      </Button>
    </ButtonView>

  </Container>
  );
}


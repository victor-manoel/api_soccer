import React from 'react';

import Lottie from 'lottie-react-native';

import soccer from '../../assets/soccer.json';

import {Container, TextContainer, TitleTwo, Title, Image, ButtonView, Button, ButtonText} from "./styles";


export default function Welcome() {
 return (
  <Container>
    <TextContainer>
      <Title >Bem-Vindo</Title>
      <TitleTwo>Prossiga para ter acesso as informações da sua equipe {'\n'}ou liga favorita</TitleTwo>
    </TextContainer>

    <Image>
      <Lottie resizeMode="contain" source={soccer} autoPlay loop/>
    </Image>

    <ButtonView>
      <Button activeOpacity={0.5}>
        <ButtonText>Acessar</ButtonText>
      </Button>
    </ButtonView>

  </Container>
  );
}


import React from 'react';
import styled from 'styled-components/native';

import fonts from '../../global/styles/theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    background-color: #fefefe;
`;

export const TextContainer = styled.View`
    flex: 1;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const Title = styled.Text`
    margin-top: 30px;
    font-size: 35px;
    color: black;
    font-weight: bold;
`;

export const TitleTwo = styled.Text`
    margin-top: 15px;
    font-size: 20px;
    color: black;
`;

export const Image = styled.View`
    flex: 1px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;

export const ButtonView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #90EE90;
    border-radius: 15px;
    margin: 25px;
    margin-top: 90px;
    width: 50%;
    height: 50px;
    align-self: center;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: 900;
`;





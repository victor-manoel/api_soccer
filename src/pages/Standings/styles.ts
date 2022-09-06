import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
        flex: 1px;
        background-color: '#FFF';
        margin-bottom: 5px;
`;

export const LettersView = styled.View`
  color: #CCC;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 5%;
`;

export const LettersText = styled.Text`
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const DataContainer = styled.View`
  flex: 1px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: center;
`;


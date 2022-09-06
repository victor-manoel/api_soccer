import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
        flex: 1px;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.colors.background};
        padding: 7px;
`;

export const TextButton = styled.Text`
        align-self: center;
        font-size: 18px;
        font-weight: bold;
        font-family:  ${({theme}) => theme.fonts.medium}
`;

export const Image = styled.Image`
        width: 45px;
        height: 45px;
`;

export const ImageContainer = styled.View`
        border-radius: 50px;
        width: 17%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.colors.white};
`;

export const NameContainer = styled.View`
        width: 60%;
`;


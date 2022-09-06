import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.colors.background};
        margin-bottom: 30px;
`;

export const DataContainer = styled.View`
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: '#FFF';
        margin-bottom: 1px;
        margin-top: 5px;
`;

export const SearchContainer = styled.View`
        margin-top: 10px;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 5px;
        width: 60%;
        height: 7%;
`;

export const Search = styled.TextInput`
        align-items: center;
        justify-content: center;
`;

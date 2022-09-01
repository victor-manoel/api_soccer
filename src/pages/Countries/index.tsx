import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Countries} from '../../components/CountriesList';
import {Container} from './styles';

import axios from "axios";

type Country = {
    name: string;
    code: string;
    league: string;
    flag: string;
}

export default function ApiCountry() {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Country[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
            headers: {
              'X-RapidAPI-Key': 'f500032209mshc016268ad53aa50p1f85d0jsn056aabbd7f29',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options)
          .then(response => {
            console.log(response.data.response)
            setData(response.data.response)
          })
          .catch(function (error) {
              console.error(error);
          });
    }, []
    )

    function openPageLeague() {
        navigation.navigate('ApiLeague');
    }

    return(
        <Container>
            <FlatList
                data={data}
                keyExtractor={(item) => item.code}
                renderItem={({item}) => {
                    return <Countries name={item.name}/>
                }}
            /> 
        </Container>
    )
}

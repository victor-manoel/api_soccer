import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Countries} from '../pages/Countries';

import axios from "axios";

type Country = {
    name: string;
    code: string;
    league: string;
    flag: string;
}

export default function(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Country[]>([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
            params: {}, 
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

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.code}
                renderItem={({item}) => {
                    return <Countries name={item.name} uri={item.flag}/>
                }}
            /> 
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginBottom: 5,
    }
})

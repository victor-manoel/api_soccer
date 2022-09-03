import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import Leagues from '../pages/Leagues';
import Players from '../pages/Players';
import Teams from '../pages/Teams';
import Standings from '../pages/Standings';
import Trophies from '../pages/Trophies';
import Welcome from '../pages/Welcome';

export function StackRoutes(){
    return(
    <Navigator initialRouteName='Standings' screenOptions={{
        
    }}>
        <Screen name='Welcome' component={Welcome} options={{
            title: 'Welcome',
            headerShown: false,
            headerStyle: {
                backgroundColor: '#90EE90'
            }
            }
        } />

        <Screen name='Leagues' component={Leagues} options={{
            title: 'Choose your league',
            headerTintColor: '#90EE90',
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25
            },
            headerStyle: {
                backgroundColor: '#90EE90'
            }
        }}/>
        <Screen name='Teams' component={Teams} options={{
            title: 'Times',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
            },
            headerStyle: {
                backgroundColor: '#90EE90'
            }
        }}/>

        <Screen name='Players' component={Players} options={{
            title: 'Jogadores',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
            },
            headerStyle: {
                backgroundColor: '#90EE90'
            }
        }}/>

        <Screen name='Standings' component={Standings} options={{
            title: 'Classificações',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
            },
            headerStyle: {
                backgroundColor: '#CCC'
            }
        }}/>    
        
    </Navigator>
    )
}

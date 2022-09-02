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
    <Navigator initialRouteName='Welcome' screenOptions={{
        headerShown: false,
    }}>
        <Screen name='Welcome' component={Welcome} options={{
            title: 'Welcome',
            }
        } />

        <Screen name='Leagues' component={Leagues} options={{
            title: 'Choose your league',
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25
            }
        }}/>
        <Screen name='Teams' component={Teams} options={{
            title: 'Teams',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
            }
        }}/>

        <Screen name='Players' component={Players} options={{
            title: 'Players',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
            }
        }}/>
        
    </Navigator>
    )
}

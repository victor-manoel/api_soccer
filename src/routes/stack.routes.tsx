import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import Countries from '../pages/Countries';
import Leagues from '../pages/Leagues';
import Players from '../pages/Players';
import Teams from '../pages/Teams';
import Standings from '../pages/Standings';

export function StackRoutes(){
    return(
    <Navigator>
        <Screen name='Standings' component={Standings}/>
    </Navigator>
    )
}

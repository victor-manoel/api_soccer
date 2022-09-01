import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import Countries from '../pages/Countries';
import Leagues from '../pages/Leagues';

export function StackRoutes(){
    return(
    <Navigator>
        <Screen name='Countries' component={Countries}/>

        <Screen name='Leagues' component={Leagues}/>
    </Navigator>
    )
}

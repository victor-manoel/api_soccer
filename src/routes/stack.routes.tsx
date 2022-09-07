import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import Leagues from "../pages/Leagues";
import Players from "../pages/Players";
import Teams from "../pages/Teams";
import Standings from "../pages/Standings";
import Trophies from "../pages/Trophies";
import Welcome from "../pages/Welcome";
import Render from "../pages/Render";

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Leagues"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#fefefe",
        },
        headerTitleStyle: {
          color: "black",
          fontWeight: "bold",
          fontSize: 25,
        },
      }}
    >
      <Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Screen
        name="Leagues"
        component={Leagues}
        options={{
          title: "Choose your league",
        }}
      />
      <Screen
        name="Teams"
        component={Teams}
        options={{
          title: "Times",
        }}
      />

      <Screen
        name="Players"
        component={Players}
        options={{
          title: "Elenco",
        }}
      />

      <Screen
        name="Standings"
        component={Standings}
        options={{
          title: "Classificações",
        }}
      />

      <Screen
        name="Trophies"
        component={Trophies}
        options={{
          title: "Troféus Conquistados",
        }}
      />
      <Screen name="Render" component={Render} />
    </Navigator>
  );
}

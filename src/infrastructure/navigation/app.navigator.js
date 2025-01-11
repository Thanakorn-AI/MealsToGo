import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeContainer } from "../../components/utility/safe-container.component";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

function MapScreen() {
  return (
    <SafeContainer>
      <Text>Map</Text>
    </SafeContainer>
  );
}

function SettingsScreen() {
  return (
    <SafeContainer>
      <Text>Settings!</Text>
    </SafeContainer>
  );
}

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hides the header above the search bar
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = "restaurant";
          } else if (route.name === "Map") {
            iconName = "map";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

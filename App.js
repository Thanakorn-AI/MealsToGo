import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeContainer } from "./src/components/utility/safe-container.component";
// const isAndroid = Platform.OS === "android";
// console.log(StatusBar.currentHeight);
import { restaurantsRequest } from "./src/services/restaurants/mock/restaurants.service";





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

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
      <Tab.Screen name="Restaurants" component={RestaurantsScreen}  />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function Index() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

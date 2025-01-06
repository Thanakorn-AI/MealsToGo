import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

// const isAndroid = Platform.OS === "android";
// console.log(StatusBar.currentHeight);

export default function Index() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


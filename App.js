import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, SafeAreaView, View, Text, StyleSheet, Platform } from "react-native";

// const isAndroid = Platform.OS === "android";

console.log(StatusBar.currentHeight);

export default function Index() {
  return (
    <> 
    <SafeAreaView style={styles.container}>
      {/* Search Section */}
      <View style={styles.searchSection}>
        <Text style={styles.searchText}>Thanakorn</Text>
      </View>

      {/* List Section */}
      <View style={styles.listSection}>
        <Text style={styles.listText}>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ///marginBottom: isAndroid ? 20 : 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0, // Handle Android StatusBar
    backgroundColor: "white", // Optional: Set the background color for the SafeAreaView
  },
  searchSection: {
    backgroundColor: "green",
    height: 50, // Adjust the height of the search section
   // padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  listSection: {
    backgroundColor: "blue",
    flex: 1, // Takes the remaining space below the search section
    justifyContent: "center",
    alignItems: "center",
  },
  listText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

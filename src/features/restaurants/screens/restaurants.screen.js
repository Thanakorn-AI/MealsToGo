import React, { useState } from "react"; // Added useState import
import { Searchbar } from "react-native-paper"; // Import Searchbar
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";



export const RestaurantsScreen = () => {
  // State to manage search input
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Section */}
      <View style={styles.searchSection}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch} // Handle text changes
          value={searchQuery} // Bind search query state
          style={styles.searchbar} // Optional: Custom styles for the Searchbar
        />
      </View>

      {/* List Section */}
      <View style={styles.listSection}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0, // Handle Android StatusBar
    backgroundColor: "white", // Optional: Set the background color for the SafeAreaView
  },
  searchSection: {
    backgroundColor: "green",
    height: 50, // Adjust the height of the search section
    justifyContent: "center",
    alignItems: "center",
  },
  searchbar: {
    flex: 1, // Make the Searchbar fill the available space
    backgroundColor: "white", // Optional: Customize background
    borderRadius: 25, // Optional: Rounded corners
    width: "90%", // Adjust width to fit the design
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

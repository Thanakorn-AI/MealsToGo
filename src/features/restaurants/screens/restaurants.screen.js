import React, { useState } from "react"; // Added useState import
import styled from "styled-components/native"; // Import styled-components
import { Searchbar } from "react-native-paper"; // Import Searchbar
import { StatusBar, Platform } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

// Styled Components
const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? `${StatusBar.currentHeight || 0}px` : "0px"};
  background-color: white; /* Optional: Set the background color */
`;

const SearchSection = styled.View`
  background-color: green;
  height: 50px; /* Adjust height of the search section */
  justify-content: center;
  align-items: center;
`;

const StyledSearchbar = styled(Searchbar)`
  flex: 1;
  background-color: white; /* Optional: Customize background */
  border-radius: 25px; /* Optional: Rounded corners */
  width: 90%; /* Adjust width to fit the design */
  padding-left: 10px; /* Adjust spacing for the icon */
  height: 40px; /* Adjust height for better alignment */
`;

const ListSection = styled.View`
  background-color: blue;
  flex: 1; /* Takes remaining space below the search section */
  justify-content: center;
  align-items: center;
`;

const ListText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

// RestaurantsScreen Component
export const RestaurantsScreen = () => {
  // State to manage search input
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeContainer>
      {/* Search Section */}
      <SearchSection>
        <StyledSearchbar
          placeholder="Search"
          onChangeText={onChangeSearch} // Handle text changes
          value={searchQuery} // Bind search query state
        />
      </SearchSection>

      {/* List Section */}
      <ListSection>
        <RestaurantInfo />
        <ListText>Some Text Here</ListText> {/* Example ListText */}
      </ListSection>
    </SafeContainer>
  );
};

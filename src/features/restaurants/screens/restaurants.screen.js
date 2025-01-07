import React, { useState } from "react"; // Added useState import
import styled from "styled-components/native"; // Import styled-components
import { Searchbar } from "react-native-paper"; // Import Searchbar
import { StatusBar, Platform } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

// Styled Components
const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android"
    ? `${StatusBar.currentHeight || 0}px`
    : "0px"};
  background-color: white; /* Optional: Set the background color */
`;

const SearchSection = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 5px;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  background-color:  ${(props) => props.theme.colors.bg.primary};
`;

const ListSection = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.space[3]};
`;

const ListText = styled.Text`
  color: ${(props) => props.theme.colors.bg.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size:  ${(props) => props.theme.sizes[1]};
  text-align: center; /* Center align the text */
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

import React, { useState } from "react"; // Added useState import
import styled from "styled-components/native"; // Import styled-components
import { Searchbar } from "react-native-paper"; // Import Searchbar
import { FlatList } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeContainer } from "../../../components/utility/safe-container.component";
// Styled Components


const SearchSection = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 5px;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;



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
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeContainer>
  );
};

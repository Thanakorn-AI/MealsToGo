import React, { useState, useContext } from "react"; // Added useState import
import styled from "styled-components/native"; // Import styled-components
import { Searchbar } from "react-native-paper"; // Import Searchbar
import { FlatList, ActivityIndicator, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeContainer } from "../../../components/utility/safe-container.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
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

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// RestaurantsScreen Component
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);

  // State to manage search input
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeContainer>
      <SearchSection>
        <StyledSearchbar
          placeholder="Search"
          onChangeText={onChangeSearch} // Handle text changes
          value={searchQuery} // Bind search query state
        />
      </SearchSection>
      {/* Show ActivityIndicator while loading */}
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#6200EE" />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeContainer>
  );
};

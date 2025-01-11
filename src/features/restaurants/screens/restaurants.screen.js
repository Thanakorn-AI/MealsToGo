import React, { useContext } from "react"; // Added useState import
import styled from "styled-components/native"; // Import styled-components
import { FlatList, ActivityIndicator, View } from "react-native";
import { Search } from "../components/search.component";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeContainer } from "../../../components/utility/safe-container.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
// Styled Components

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
export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeContainer>
      <Search />
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

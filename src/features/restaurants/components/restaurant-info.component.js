import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

// Styled components
const StyledCard = styled(Card)`
  margin: 16px; /* Add spacing around the card */
  elevation: 4; /* Optional: Add shadow for Android */
  border-radius: 8px; /* Optional: Rounded corners */
  background-color: white; /* Ensure consistent background color */
`;

const StyledCardCover = styled(Card.Cover)`
  height: 180px; /* Adjust height of the image */
`;

const Title = styled.Text`
  margin-top: 8px; /* Add spacing between image and text */
  font-size: 16px;
  font-weight: bold;
  text-align: center; /* Center align the text */
`;

// Component
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <StyledCard>
      {/* Display Restaurant Image */}
      <StyledCardCover source={{ uri: photos[0] }} />

      {/* Display Restaurant Name */}
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </StyledCard>
  );
};
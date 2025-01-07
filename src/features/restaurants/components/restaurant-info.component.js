import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';
import { Text, Image, View } from "react-native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";


// Styled components
const StyledCard = styled(Card)`
  margin: ${(props) => props.theme.space[3]}; /* Add spacing around the card */
  elevation: 4; /* Optional: Add shadow for Android */
  border-radius: ${(props) => props.theme.space[2]}; /* Optional: Rounded corners */
  background-color: ${(props) => props.theme.colors.bg.primary}; /* Ensure consistent background color */
`;

const StyledCardCover = styled(Card.Cover)`
  height: ${(props) => props.theme.sizes[5]}; /* Adjust height of the image */
`;


const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center; /* Center align the text */
`;

const Info = styled.View`
  margin-top: ${(props) => props.theme.space[2]}; /* Add spacing between image and text */
`;

const RatingRow = styled.View`
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; /* Space out elements horizontally */
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Stars = styled.View`
  flex-direction: row; /* Align stars in a row */
`;


const Address = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size:  ${(props) => props.theme.fontSizes.body};
`;

// Component
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard>
      {/* Display Restaurant Image */}
      <StyledCardCover source={{ uri: photos[0] }} />

      {/* Display Restaurant Name */}
      <Card.Content>
        <Info>
        <Title>{name}</Title>

          {/* Rating Row */}
          <RatingRow>
      {/* Stars */}
      <Stars>
              {ratingArray.map((_, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Stars>

            {/* Open Icon Section */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Closed Temporarily Text */}
              {isClosedTemporarily && (
                <Text style={{ color: "red", marginRight: 8, fontSize: 9 }}>
                  CLOSED TEMPORARILY
                </Text>
              )}

      {/* Open Icon */}
      {isOpenNow && <SvgXml xml={open} width={20} height={20} />}


              {/* Padding and Icon */}
              <View style={{ paddingLeft: 16 }} />
              <Image
                style={{ width: 15, height: 15 }}
                source={{ uri: icon }}
              />
   </View>
      </RatingRow>



        <Address>{address}</Address>
        </Info>
      </Card.Content>
    </StyledCard>
  );
};

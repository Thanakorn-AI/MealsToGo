import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Text, Image, View } from "react-native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  StyledCard,
  StyledCardCover,
  Title,
  Info,
  RatingRow,
  Stars,
  Address,
} from "./restaurant-info-card.styles";

// Component
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg",
    ],
    address = restaurant.address || "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
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
                <SvgXml
                  key={`star-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Stars>

            {/* Open Icon Section */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Closed Temporarily Text */}
              {isClosedTemporarily && (
                <Text
                  style={{
                    color: "red",
                    marginRight: 8,
                    fontSize: 9,
                    paddingTop: 10,
                  }}
                >
                  CLOSED TEMPORARILY
                </Text>
              )}

              {/* Open Icon */}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

              {/* Padding and Icon */}
              <View style={{ paddingLeft: 16 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </View>
          </RatingRow>

          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </StyledCard>
  );
};

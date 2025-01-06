import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";


export const RestaurantInfo = ({ restaurant = {} }) => {
    
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <Card style={styles.card}>
          {/* Display Restaurant Image */}
          <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
          
          {/* Display Restaurant Name */}
          <Card.Content>
            <Text style={styles.title}>{name}</Text>
          </Card.Content>
        </Card>
      );
};


const styles = StyleSheet.create({
    card: {
      margin: 16, // Add spacing around the card
      elevation: 4, // Optional: Add shadow for Android
      borderRadius: 8, // Optional: Rounded corners
      backgroundColor: "white", // Ensure consistent background color
    },
    cover: {
      height: 180, // Adjust height of the image
    },
    title: {
      marginTop: 8, // Add spacing between image and text
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center", // Center align the text
    },
  });
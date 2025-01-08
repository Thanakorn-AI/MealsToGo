import styled from "styled-components/native";
import { Card } from "react-native-paper";

// Styled components
export const StyledCard = styled(Card)`
  margin: ${(props) => props.theme.space[3]}; /* Add spacing around the card */
  elevation: 4; /* Optional: Add shadow for Android */
  border-radius: ${(props) =>
    props.theme.space[2]}; /* Optional: Rounded corners */
  background-color: ${(props) =>
    props.theme.colors.bg.primary}; /* Ensure consistent background color */
`;

export const StyledCardCover = styled(Card.Cover)`
  height: ${(props) => props.theme.sizes[5]}; /* Adjust height of the image */
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center; /* Center align the text */
`;

export const Info = styled.View`
  margin-top: ${(props) =>
    props.theme.space[2]}; /* Add spacing between image and text */
`;

export const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Space out elements horizontally */
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Stars = styled.View`
  flex-direction: row; /* Align stars in a row */
`;

export const Address = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

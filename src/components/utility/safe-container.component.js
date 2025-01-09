import { StatusBar, Platform, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android"
    ? `${StatusBar.currentHeight || 0}px`
    : "0px"};
  background-color: ${(props) =>
    props.theme.colors.bg.secondary}; /* Optional: Set the background color */
`;
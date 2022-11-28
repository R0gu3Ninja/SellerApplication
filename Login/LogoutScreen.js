import React from "react";
import { Button, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@expo/vector-icons";

const onLogoutHandler = () => {
  console.log("inside logout");
};
const LogoutScreen = () => {
  return (
    <Button
      onPress={onLogoutHandler}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default LogoutScreen;

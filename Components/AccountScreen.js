import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AccountScreen = (onPress) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="person" size={24}></Ionicons>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  headerIcons: {
    padding: 5,
  },
});
export default AccountScreen;

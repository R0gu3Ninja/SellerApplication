import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = () => {
  return (
    <View styles={styles.headerIcons}>
      <Pressable>
        <Ionicons name="heart-outline"></Ionicons>
      </Pressable>
      <Pressable>
        <Ionicons name="cart"></Ionicons>
      </Pressable>
      <Pressable>
        <Ionicons name="search"></Ionicons>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  headerIcons: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
export default IconButton;

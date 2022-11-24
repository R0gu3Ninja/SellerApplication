import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderIcons = ({ onPress, iconname, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.headerIcons}>
      <Ionicons name={iconname} size={24}>
        {text}
      </Ionicons>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  headerIcons: {
    alignContent: "center",
    padding: 5,
  },
});
export default HeaderIcons;

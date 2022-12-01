import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";

import images from "../images";
import { useNavigation } from "@react-navigation/native";
import ShopCard from "./ShopCard";
const ShopCarousel = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {images.map((item) => (
        <Pressable
          onPress={() =>
            navigation.navigate("ShopDisplayScreen", { shopId: item.shopId })
          }
        >
          <ShopCard item={item} />
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",

    alignContent: "center",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
});
export default ShopCarousel;

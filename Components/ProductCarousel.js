import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import productImages from "../Images/productImages";
import { useNavigation } from "@react-navigation/native";

const ProductCarousel = (props) => {
  const navigator = useNavigation();

  return (
    <View style={styles.productCarousel}>
      <FlatListSlider
        data={productImages}
        height={500}
        timer={5000}
        onPress={(item) => {
          console.log("item :" + item);
          navigator.navigate("ProductDisplayScreen", {
            productId: item.productId,
          });
        }}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
        indicatorActiveColor={"#8e44ad"}
        indicatorInActiveColor={"#ffffff"}
        indicatorActiveWidth={30}
        animation
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productCarousel: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight: 450,
    maxWidth: 400,
    alignContent: "center",
    borderRadius: 40,
  },
});
export default ProductCarousel;

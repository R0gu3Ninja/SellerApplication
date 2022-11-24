import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import images from "../images";
const ShopCarousel = () => {
  return (
    <View style={styles.container}>
      <FlatListSlider
        data={images}
        height={200}
        timer={5000}
        onPress={(item) => alert(JSON.stringify(item))}
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
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight: 200,
    maxWidth: 400,
    alignContent: "center",
  },
});
export default ShopCarousel;

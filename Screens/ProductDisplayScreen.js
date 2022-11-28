import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import productImages from "../Images/productImages";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../Store/wishlist";
const ProductDisplayScreen = ({ route }) => {
  console.log("Inside ProductDisplayScreen");
  const item = route.params.item;
  const dispatch = useDispatch();
  console.log("Product Id :" + item);
  const wishListItems = useSelector((state) => state.wishListReducer);
  console.log("wishListItems  :" + wishListItems);

  const addItemToWishList = () => {
    console.log("Added to WishList id: " + item);
    dispatch(addToWishList({ item: item }));
  };

  const addItemToCart = () => {
    console.log("Added to Cart");
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.productCarousel}>
          <FlatListSlider
            data={productImages}
            height={500}
            timer={5000}
            onPress={(item) => console.log("Pressed Item")}
            contentContainerStyle={{ paddingHorizontal: 0 }}
            indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
            indicatorActiveColor={"#8e44ad"}
            indicatorInActiveColor={"#ffffff"}
            indicatorActiveWidth={30}
            animation
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
          <Text>Product Description</Text>
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Ionicons
            name="heart-outline"
            size={30}
            onPress={addItemToWishList}
          />
        </View>
        <View style={styles.buttons}>
          <Ionicons name="cart" size={30} onPress={addItemToCart} />
        </View>
        <View style={styles.buttons}>
          <Foundation name="share" size={30} onPress={addItemToCart} />
        </View>
      </View>
    </>
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
  },
  scrollView: {
    maxHeight: 200,
    maxWidth: 400,
  },
  buttonsContainer: {
    flexDirection: "row",
    borderColor: "#fff",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
});

export default ProductDisplayScreen;

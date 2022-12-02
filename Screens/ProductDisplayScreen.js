import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import { useNavigation } from "@react-navigation/native";
import productImages from "../Images/productImages";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "../Store/wishlist";
import { addToCart, removeFromCart } from "../Store/cart";
import SizeModal from "../Components/SizeModal";

const ProductDisplayScreen = ({ route }) => {
  console.log("Inside ProductDisplayScreen");
  const item = route.params.item;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log("Product Id :" + item);
  const wishListItems = useSelector((state) => state.wishListReducer);
  console.log("wishListItems  :" + wishListItems);
  const [addedToWishList, setAddedToWishList] = useState(false);
  const [addedToCart, setAddToCart] = useState(false);
  addedToCart;
  const [screen, setScreen] = useState();

  const addItemToWishList = () => {
    console.log("Added to WishList id: " + item);
    setAddedToWishList(true);
    dispatch(addToWishList({ item: item }));
  };

  const removeItemFromWishList = () => {
    console.log("Removing from WishList item: " + item);
    dispatch(removeFromWishList({ item: item }));
    setAddedToWishList(false);
  };

  const displaySizeModalScreenHandler = () => {
    console.log("displaySizeModalScreenHandler : " + item);
    setScreen(<SizeModal item={item} test={setAddToCartHandler} />);

    //setSizeSelected(true);
  };

  const setAddToCartHandler = (value) => {
    setAddToCart(value);
  };

  const removeItemFromCart = () => {
    console.log("Removing from Cart item: " + item);
    dispatch(removeFromCart({ item: item }));
    setAddedToWishList(false);
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
        {!addedToWishList && (
          <View style={styles.buttons}>
            <Ionicons
              name="heart-outline"
              size={30}
              onPress={addItemToWishList}
            />
          </View>
        )}
        {addedToWishList && (
          <View style={styles.buttons}>
            <Ionicons name="heart" size={30} onPress={removeItemFromWishList} />
          </View>
        )}
        <View style={styles.verticleLine}></View>
        <View style={styles.buttons}>
          {!addedToCart && (
            <MaterialCommunityIcons
              name="cart-plus"
              size={30}
              color="black"
              onPress={displaySizeModalScreenHandler}
            />
          )}
          {addedToCart && (
            <MaterialCommunityIcons
              name="cart-arrow-right"
              size={30}
              color="black"
              onPress={() => {
                navigation.navigate("Cart");
              }}
            />
          )}
        </View>
      </View>
      <View style={styles.sizeModal}>{screen}</View>
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
    left: 40,
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
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  sizeModal: {
    height: "0%",
  },
});

export default ProductDisplayScreen;

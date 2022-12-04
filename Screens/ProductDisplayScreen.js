import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import { useNavigation } from "@react-navigation/native";
import productImages from "../Images/productImages";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "../Store/wishlist";
import { addToCart, removeFromCart } from "../Store/cart";
import SizeModalNew from "../Components/SizeModalNew";

import ProductDescriptionCard from "../Components/ProductDescriptionCard";
import CommentsSection from "../Components/CommentsSection";
import RatingsSection from "../Components/RatingsSection";
import SimilarItemsModal from "../Components/SimilarItemsModal";

const ProductDisplayScreen = ({ route }) => {
  console.log("Inside ProductDisplayScreen");
  const item = route.params.item;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log("Product Id :" + item.productId);
  const wishListItems = useSelector((state) => state.wishListReducer);
  console.log("wishListItems  :" + wishListItems);
  const [addedToWishList, setAddedToWishList] = useState(false);
  const [addedToCart, setAddToCart] = useState(false);
  const [similarItemsModal, setSimilarItemsModal] = useState(false);

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
    setScreen(<SizeModalNew item={item} test={setAddToCartHandler} />);
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

  const similarItemsModalRef = useRef();
  const sizeModalRef = useRef();

  return (
    <>
      <ScrollView>
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

        <View style={styles.viewSimilarButton}>
          <MaterialCommunityIcons
            style={styles.viewSimilarContainer}
            name="view-carousel-outline"
            size={30}
            color="black"
            onPress={() => similarItemsModalRef.current.showModal()}
          />
        </View>

        <ProductDescriptionCard style={{ margin: 20 }} />
        <RatingsSection />
        <CommentsSection />
      </ScrollView>
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
        <View style={styles.verticalLine}></View>
        <View style={styles.buttons}>
          {!addedToCart && (
            <MaterialCommunityIcons
              name="cart-plus"
              size={30}
              color="black"
              onPress={() => sizeModalRef.current.showModal()}
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
      <SizeModalNew ref={sizeModalRef} item={item} test={setAddToCartHandler} />
      <SimilarItemsModal ref={similarItemsModalRef} style={{ height: "30%" }} />
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
    left: 75,
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
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "black",
  },
  sizeModal: {
    height: "0%",
  },
  verticalLine: {
    marginLeft: 5,
    width: 2,
    height: "100%",
    backgroundColor: "black",
  },
  similarItems: {
    top: 40,
  },
  viewSimilarButton: {
    marginTop: -40,
    zIndex: 1,
    maxWidth: 60,
    backgroundColor: "white",
    borderRadius: 20,
    left: 10,
    bottom: 20,
  },
  viewSimilarContainer: {
    left: "20%",
    fontSize: 40,
    backgroundColor: "transparent",
  },
});

export default ProductDisplayScreen;

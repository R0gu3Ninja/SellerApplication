import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Button,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../Store/wishlist";
import { addToCart } from "../Store/cart";
import SizeModalNew from "./SizeModalNew";

const WishList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [displaySizeModalScreen, setDisplaySizeModalScreen] = useState(false);
  const [currentWishListItem, setCurrentWishListItem] = useState();
  const [screen, setScreen] = useState();
  const [addedToCart, setAddToCart] = useState(false);
  const sizeModalRef = useRef();
  const wishListItems = useSelector(
    (state) => state.wishListReducer.wishListItems
  );
  const removeItemFromWishListHandler = (item) => {
    console.log("removeItemFromWishListHandler");
    dispatch(removeFromWishList({ item: item }));
  };
  const addToCartHandler = (item) => {
    console.log("addToCartHandler " + item);
    dispatch(addToCart({ item: item }));
  };
  const displaySizeModalScreenHandler = (item) => {
    console.log("sizeModalRef.current" + sizeModalRef.current);
    setCurrentWishListItem(item);
    sizeModalRef.current.showModal();
  };
  const setAddToCartHandler = (value) => {
    setAddToCart(value);
  };
  return (
    <>
      <FlatList
        data={wishListItems}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate("ProductDisplayScreen", { item })
              }
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  margin: 1,
                }}
              >
                <Image
                  style={styles.imageThumbnail}
                  source={{ uri: item.image }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1,
              }}
            >
              <Button
                title="Move to Cart"
                onPress={() => displaySizeModalScreenHandler(item)}
              ></Button>
              <Button
                title="Remove"
                onPress={() => removeItemFromWishListHandler(item)}
              ></Button>
            </View>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
      <SizeModalNew
        ref={sizeModalRef}
        item={currentWishListItem}
        test={setAddToCartHandler}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 2,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  buttonsContainer: {
    flexDirection: "row",
    borderColor: "#fff",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
  },
  sizeModal: {
    flex: 1,
    maxHeight: 200,
    justifyContent: "flex-start",
  },
});
export default WishList;

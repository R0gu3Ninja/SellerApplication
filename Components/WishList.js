import React, { useState } from "react";
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
import SizeModal from "./SizeModal";

const WishList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [displaySizeModalScreen, setDisplaySizeModalScreen] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [screen, setScreen] = useState();
  const [addedToCart, setAddToCart] = useState(false);
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
    console.log("Added to cart ifrom productdisplay: ");
    setScreen(<SizeModal item={item} test={setAddToCartHandler} />);
    console.log("coming out after adding to cart ");
    //removeItemFromWishListHandler(item);
    //setSizeSelected(true);
  };
  const setAddToCartHandler = (value) => {
    setAddToCart(value);
  };
  return (
    <>
      <View style={styles.container}>
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
              <View>
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
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={styles.sizeModal}>{screen}</View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
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
    height: "0%",
  },
});
export default WishList;

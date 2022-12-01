import React from "react";
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
import HeaderIcons from "./HeaderIcons";
import { Ionicons } from "@expo/vector-icons";
import { removeFromWishList } from "../Store/wishlist";
import { addToCart } from "../Store/cart";

const WishList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={wishListItems}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("ProductDisplayScreen", {})}
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
                  onPress={() => addToCartHandler(item)}
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
});
export default WishList;

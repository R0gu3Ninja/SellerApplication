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
import { removeItemFromWishList } from "../Store/wishlist";

const WishList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishListItems = useSelector(
    (state) => state.wishListReducer.wishListItems
  );
  const removeItemFromWishListHandler = () => {
    console.log("removeItemFromWishListHandler");
    dispatch(removeItemFromWishList({ item: item }));
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
                <Button title="move to Cart"></Button>
                <Button
                  title="Remove"
                  onPress={removeItemFromWishListHandler}
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

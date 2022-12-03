import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import productImages from "../Images/productImages";
import ProductDescriptionCard from "../Components/ProductDescriptionCard";
import StarRating from "../Components/StarRating";
const ShopDisplayScreen = ({ route }) => {
  const navigation = useNavigation();
  console.log("Displaying shop" + route.params.shopId);
  const shopId = "" + route.params.shopId;

  return (
    <View style={styles.container}>
      <FlatList
        data={productImages.filter((item) => item.category === "t-shirt")}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                console.log("Insided Categorydisplay :" + item);
                navigation.navigate("ProductDisplayScreen", {
                  item: item,
                });
              }}
            >
              <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
                <Image
                  style={styles.imageThumbnail}
                  source={{ uri: item.image }}
                />
                <View style={styles.ratingSection}>
                  <StarRating />
                </View>
                <ProductDescriptionCard />
              </View>
            </TouchableOpacity>
          </>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
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
export default ShopDisplayScreen;

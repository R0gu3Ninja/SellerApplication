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

const ShopDisplayScreen = ({ route }) => {
  const navigation = useNavigation();
  console.log("Displaying shop" + route.params.shopId);
  const shopId = "" + route.params.shopId;

  return (
    <View style={styles.container}>
      <FlatList
        data={productImages.filter((item) => item.shopId === shopId)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              navigation.navigate("ProductDisplayScreen", { item })
            }
          >
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <Image
                style={styles.imageThumbnail}
                source={{ uri: item.image }}
              />
            </View>
          </TouchableOpacity>
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

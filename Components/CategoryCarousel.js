import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import images from "../images";
import MyPhoto from "../shirt.jpg";
import categories from "./categories";
import { useNavigation } from "@react-navigation/native";
const renderCategories = () => {};
const CategoryCarousel = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoryDisplayScreen")}
          >
            <Image style={styles.image} source={MyPhoto} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    maxHeight: 50,
    maxWidth: 400,
    alignContent: "center",
  },
  image: {
    flex: 1,
    width: 50,
    height: 50,
    maxHeight: 50,
    borderRadius: 400 / 2,
    justifyContent: "flex-start",
  },
});
export default CategoryCarousel;

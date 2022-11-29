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
import HeaderIcons from "../Components/HeaderIcons";
import BottomSheet from "../Components/BottomSheet";
import {
  Ionicons,
  Foundation,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const CategoryDisplayScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={productImages.filter((item) => item.category === "t-shirt")}
          renderItem={({ item }) => (
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
              </View>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <MaterialCommunityIcons
            name="sort"
            size={30}
            color="black"
            onPress={viewSortOptions}
          />
        </View>
        <View style={styles.verticleLine}></View>
        <View style={styles.buttons}>
          <AntDesign name="filter" size={30} color="black" />
        </View>
        <BottomSheet />
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
    left: 40,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
});
export default CategoryDisplayScreen;

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import productImages from "../Images/productImages";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import FilterMenu from "../Components/FilterMenu";
import BottomModal from "../Components/BottomModal";
import SortModal from "../Components/SortModal";
const CategoryDisplayScreen = () => {
  const [screen, setScreen] = useState();
  const navigation = useNavigation();

  const showSortOptions = () => {
    console.log("showSortOptions");
    setScreen(<SortModal />);
  };
  const showFilterOptions = () => {
    setScreen(<FilterMenu />);
  };

  return (
    <>
      <View>
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
      <View style={styles.modalContainer}>{screen}</View>
      <View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <MaterialCommunityIcons
              name="sort"
              size={30}
              color="black"
              onPress={showSortOptions}
            />
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.buttons}>
            <AntDesign
              name="filter"
              size={30}
              color="black"
              onPress={showFilterOptions}
            />
          </View>
        </View>
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
    left: 40,
    flexDirection: "row",
    borderColor: "#fff",
    justifyContent: "center",
  },
  modalContainer: {
    maxHeight: 0,
  },
  buttons: {
    flex: 1,
  },
});
export default CategoryDisplayScreen;

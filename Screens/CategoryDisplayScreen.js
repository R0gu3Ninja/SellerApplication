import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Text,
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
import FilterMenu from "../Components/FilterMenu";
import BottomModal from "../Components/BottomModal";

const CategoryDisplayScreen = () => {
  const [onclick, setOnClick] = useState(false);
  const [screen, setScreen] = useState();

  const showSortOptions = () => {
    setScreen(<BottomModal />);
    setOnClick(true);
  };
  const showFilterOptions = () => {
    setScreen(<FilterMenu />);
    setOnClick(true);
  };
  const navigation = useNavigation();

  return (
    <>
      {!onclick && (
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
      )}

      {!onclick && (
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
      )}
      {onclick && screen}
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
export default CategoryDisplayScreen;

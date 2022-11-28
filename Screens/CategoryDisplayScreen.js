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
import {
  Ionicons,
  Foundation,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const CategoryScreenTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Root"
        component={CategoryDisplayScreen}
        options={{ headerShown: false, display: "none" }}
      />
      <Tab.Screen
        name="Sort"
        component={Filter}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Filter" component={Filter} />
    </Tab.Navigator>
  );
};

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
              onPress={() =>
                navigation.navigate("ProductDisplayScreen", {
                  productId: item.productId,
                })
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
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <MaterialCommunityIcons name="sort" size={30} color="black" />
        </View>
        <View style={styles.buttons}>
          <AntDesign name="filter" size={30} color="black" />
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
    flexDirection: "row",
    borderColor: "#fff",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
  },
});
export default CategoryDisplayScreen;

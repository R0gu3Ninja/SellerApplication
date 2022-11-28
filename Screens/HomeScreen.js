import { React, useLayoutEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import ProductCarousel from "../Components/ProductCarousel";
import ShopCarousel from "../Components/ShopCarousel";
import CategoryCarousel from "../Components/CategoryCarousel";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <CategoryCarousel />
        </View>
        <View style={styles.scrollview}>
          <ScrollView>
            <View>
              <ProductCarousel />
            </View>
            <View>
              <ShopCarousel />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  statusbar: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
  },
});
export default HomeScreen;

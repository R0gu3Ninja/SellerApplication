import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import images from "../Images/productImages";
import MyPhoto from "../shirt.jpg";
import { useNavigation } from "@react-navigation/native";
import firebase from "../firebase";
const FilterTest = (props) => {
  const navigation = useNavigation();
  const [productImagesTest, setProductImages] = useState([]);
  const productImagesRef = firebase.storage().ref("ProductImages");

  useEffect(() => {
    productImagesRef
      .list()
      .then(function (result) {
        result.items.forEach(function (imageRef) {
          displayImage(imageRef);
        });
      })
      .catch(function (error) {
        // Handle any errors
      });
  }, []);
  function displayImage(imageRef) {
    imageRef
      .getDownloadURL()
      .then(function (url) {
        console.log(url);

        setProductImages((prevImg) => [...prevImg, "" + url]);
      })
      .catch(function (error) {
        // Handle any errors
      });
  }
  console.log("productImagesTest" + productImagesTest[0]);
  return (
    <FlatList
      data={productImagesTest}
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
              <Image style={styles.imageThumbnail} source={{ uri: item }} />
            </View>
          </TouchableOpacity>
        </>
      )}
      //Setting the number of column
      numColumns={2}
      keyExtractor={(item, index) => index}
    />
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
  ratingSection: {
    flexDirection: "row",
  },
  viewSimilarButton: {
    right: 0,
  },
  viewSimilarContainer: {
    fontSize: 20,
    backgroundColor: "gray",
  },
});
export default FilterTest;

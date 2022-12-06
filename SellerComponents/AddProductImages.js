import React, { useRef, useState } from "react";
import { Text, Image, View, StyleSheet, Button, FlatList } from "react-native";
import firebase from "../firebase";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
const AddProductImages = () => {
  const [imageUri, setImageUri] = useState(null);
  const [imagesBulk, setImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const pickImage = async () => {
    let cameraResult = await ImagePicker.launchCameraAsync();
    setImageUri(cameraResult.uri);
  };

  const uploadImageBulk = async () => {
    console.log("uploadImageBulk");
    imagesBulk.map(async (img) => {
      const response = await fetch(img);
      const blob = await response.blob();
      const filename = img.substring(img.lastIndexOf("/") + 1);
      var ref = firebase
        .storage()
        .ref("ProductImages")
        .child(filename)
        .put(blob);
      try {
        await ref;
      } catch (e) {
        console.log(e);
      }
    });
  };

  const AddImage = (newImage) => {
    if(newImage!=null)
    setImages((prevImgs) => [...prevImgs, newImage]);
    displayImagesSection(newImage);
    setImageUri(null);
  };

  const displayImagesSection = (newImage) => {
    setDisplayImages((prevImgs) => [...prevImgs, newImage]);
  };
  const publishToStore = () => {
    setImages((prevImgs) => [...prevImgs, newImage]);
    setImageUri(null);
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Button title="Add Image" onPress={() => AddImage(imageUri)} />
        <Button title="Upload Images" onPress={uploadImageBulk}></Button>
        <Button title="Publish To Store" onPress={() => publishToStore()} />
        <View style={styles.imageDisplaySection}>
          {displayImages.map((image) => (
            <Image
              style={styles.imageDisplaySectionImages}
              source={{ uri: image }}
            />
          ))}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  imageDisplaySection: {
    flexDirection: "row",
  },
  imageDisplaySectionImages: {
    width: 100,
    height: 100,
  },
});
export default AddProductImages;

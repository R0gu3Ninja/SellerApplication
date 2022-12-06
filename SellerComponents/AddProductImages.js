import React, { useRef, useState } from "react";
import { Text, Image, View, StyleSheet, Button, FlatList } from "react-native";
import firebase from "../firebase";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { addProductImages } from "../Store/productDetails";
const AddProductImages = () => {
  const dispatch = useDispatch();
  const [imageUri, setImageUri] = useState(null);
  const [imagesBulk, setImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);

  const productDetailsForPublishing = useSelector(
    (state) => state.productDetailsReducer.productDetails
  );
  const productImagesForPublishing = useSelector(
    (state) => state.productDetailsReducer.productImages
  );

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
        ref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          dispatch(addProductImages({ item: downloadURL }));
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  const AddImage = (newImage) => {
    if (newImage != null) setImages((prevImgs) => [...prevImgs, newImage]);
    displayImagesSection(newImage);
    setImageUri(null);
  };

  const displayImagesSection = (newImage) => {
    setDisplayImages((prevImgs) => [...prevImgs, newImage]);
  };
  const publishToStore = () => {
    console.log("productImagesForPublishing :: ");

    const productDetailsRef = firebase.firestore().collection("ProductDetails");

    const productData = {
      size: productDetailsForPublishing[0],
      color: productDetailsForPublishing[1],
      type: productDetailsForPublishing[2],
      design: productDetailsForPublishing[3],
      price: productDetailsForPublishing[4],
      image1: productImagesForPublishing[0],
      image2: productImagesForPublishing[1],
      image3: productImagesForPublishing[2],
      image4: productImagesForPublishing[3],
    };
    productDetailsRef.add(productData).catch((error) => console.log(error));
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

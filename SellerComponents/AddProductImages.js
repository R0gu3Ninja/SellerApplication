import React, { useState } from "react";
import { Text, Image, View, StyleSheet, Button, FlatList } from "react-native";
import firebase from "../firebase";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { addProductImages } from "../Store/productDetails";
import { useNavigation } from "@react-navigation/native";

const AddProductImages = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
    let key = 0;
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
          dispatch(addProductImages({ item: downloadURL, key: key }));
          key++;
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

  const shopId = useSelector((state) => state.shopProfileReducer.shopId);
  const shopName = useSelector((state) => state.shopProfileReducer.shopName);
  const shopDescription = useSelector(
    (state) => state.shopProfileReducer.shopDescription
  );

  const publishToStore = () => {
    console.log("productImagesForPublishing :: ");

    const productDetailsRef = firebase.firestore().collection("ProductDetails");
    const productData = {
      category: productDetailsForPublishing[0],
      size: productDetailsForPublishing[1],
      color: productDetailsForPublishing[2],
      type: productDetailsForPublishing[3],
      design: productDetailsForPublishing[4],
      actualPrice: productDetailsForPublishing[5],
      discountPrice: productDetailsForPublishing[8],
      discountPercentage: productDetailsForPublishing[9],
      image1: productImagesForPublishing[0],
      image2: productImagesForPublishing[1],
      shopId: shopId,
      shopName: shopName,
      productId: shopId + new Date().toISOString(),
      shopDescription: shopDescription,
      uploadedOn: new Date().toISOString().slice(0, 10),
      FiveStarReviews: 1,
      FourStarReviews: 0,
      ThreeStarReviews: 0,
      TwoStarReviews: 0,
      OneStarReviews: 0,
      noOfReviews: 1,
      productRating: 5,
    };
    productDetailsRef.add(productData).catch((error) => console.log(error));

    navigation.navigate("HomeScreen");
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

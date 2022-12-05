import React, { useRef, useState } from "react";
import { Text, Image, View, StyleSheet, Button } from "react-native";
import firebase from "../firebase";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
const Fetch = () => {
  const [users, setUsers] = useState();
  const todoRef = firebase.firestore().collection("todos");
  const [imageUri, setImageUri] = useState(null);
  const [imagesBulk, setImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
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
  const uploadImage = async () => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const filename = imageUri.substring(imageUri.lastIndexOf("/") + 1);
    var ref = firebase.storage().ref("Test").child(filename).put(blob);
    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
  };

  const addDescription = () => {
    const data = { heading: "JB", text: "P" };
    todoRef.add(data).catch(console.log("error"));
  };

  const AddImage = (newImage) => {
    setImages((prevImgs) => [...prevImgs, newImage]);
    setImageUri(null);
  };

  const getImages = () => {
    productImageRef.onSnapshot((querySnapShot) => {
      querySnapShot.forEach((doc) =>
        setProductImages((prevImages) => [...prevImages, doc.data()])
      );
    });
  };
  useEffect(() => {
    {
      todoRef.onSnapshot((querySnapShot) => {
        const users = [];
        querySnapShot.forEach((doc) => {
          const { heading, text } = doc.data();
          users.push({ id: doc.id, heading, text });
        });
        setUsers(users);
      });
    }
  }, []);

  return (
    <>
      <View>
        <Button title="Send" onPress={uploadImageBulk}></Button>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Button title="Add Image" onPress={() => AddImage(imageUri)} />
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    maxWidth: 400,
    alignContent: "center",
  },
});
export default Fetch;

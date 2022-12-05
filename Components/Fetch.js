import React, { useRef, useState } from "react";
import { Text, Image, View, StyleSheet, Button } from "react-native";
import firebase from "../firebase";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
const Fetch = () => {
  const [users, setUsers] = useState();
  const todoRef = firebase.firestore().collection("todos");
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let cameraResult = await ImagePicker.launchCameraAsync();
    setImageUri(cameraResult.uri);
  };

  const uploadImage = async () => {
    console.log("0");
    const response = await fetch(imageUri);
    console.log("1");
    const blob = await response.blob();
    console.log("2");
    const filename = imageUri.substring(imageUri.lastIndexOf("/") + 1);
    console.log(filename);
    var ref = firebase.storage().ref().child(filename).put(blob);
    console.log("4");
    try {
      await ref;
      console.log("5");
    } catch (e) {
      console.log(e);
    }
  };

  const addField = () => {
    const data = { heading: "JB", text: "P" };
    todoRef.add(data).catch(console.log("error"));
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
        <Button title="Send" onPress={uploadImage}></Button>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
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

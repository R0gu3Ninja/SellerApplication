import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MyPhoto from "../Images/5star.png";
import userImages from "../Images/userImages.png";
const CommentCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rateSection}>
        <Image style={styles.ratingImage} source={MyPhoto}></Image>
        <Text style={styles.posted}>a month ago</Text>
      </View>
      <View style={styles.comment}>
        <Text>
          user review about product user review about product user review about
          product user review about product
        </Text>
      </View>
      <View style={styles.sizeSection}>
        <Text>Size bought : XXL</Text>
      </View>
      <View style={styles.userImageSection}>
        <Image style={styles.userImages} source={userImages}></Image>
        <Image style={styles.userImages} source={userImages}></Image>
        <Image style={styles.userImages} source={userImages}></Image>
      </View>

      <View style={styles.userName}>
        <Text>Jayendra Bhaskar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    maxHeight: 450,
    width: "95%",
    backgroundColor: "gray",
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
  comment: {
    padding: 10,
  },
  rateSection: {
    flexDirection: "row",
    maxHeight: 50,
  },
  ratingImage: {
    width: 50,
    height: 50,
    maxHeight: 50,
    borderRadius: 400 / 2,
    justifyContent: "flex-start",
  },
  sizeSection: {
    maxWidth: 150,
    padding: 5,
  },

  posted: {
    top: 12,
  },
  userImageSection: {
    flexDirection: "row",
    padding: 5,
  },
  userImages: {
    width: 50,
    height: 50,
    maxHeight: 50,
    borderRadius: 400 / 2,
    justifyContent: "flex-start",
  },
  userName: {
    padding: 10,
  },
});

export default CommentCard;

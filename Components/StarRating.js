import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ratingObject = {
  ratings: 3,
  views: 123456,
};
const StarRating = (Props) => {
  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let path = require("./star-filled.png");

    if (i > ratingObject.ratings) {
      path = require("./star-unfilled.png");
    }

    stars.push(<Image style={styles.image} source={path} />);
  }
  return (
    <View style={styles.container}>
      {stars}
      <View style={styles.verticalLine}></View>
      <Text style={styles.text}>{ratingObject.views}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flexDirection: "row",
    maxWidth: 180,
    maxHeight: 100,
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 12,
    marginLeft: 8,
    marginRight: 8,
  },
  verticalLine: {
    marginLeft: 5,
    width: 1,
    height: "100%",
    backgroundColor: "black",
  },
});
export default StarRating;

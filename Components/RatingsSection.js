import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import MyPhoto from "./star-filled.png";

const RatingsSection = () => (
  <View style={styles.container}>
    <View style={styles.ratingSection}>
      <Text style={styles.overallrating}>4.2</Text>
      <Image style={styles.ratingImage} source={MyPhoto}></Image>
    </View>
    <View style={styles.verticalLine}></View>
    <View style={styles.progressBarsColumn}>
      <View style={styles.individualRating}>
        <Text>5</Text>
        <ProgressBar style={styles.progressBars} progress={0.8} color="green" />
        <Text>(500)</Text>
      </View>
      <View style={styles.individualRating}>
        <Text>4</Text>
        <ProgressBar style={styles.progressBars} progress={0.6} color="green" />
        <Text>(500)</Text>
      </View>
      <View style={styles.individualRating}>
        <Text>3</Text>
        <ProgressBar
          style={styles.progressBars}
          progress={0.2}
          color="orange"
        />
        <Text>(500)</Text>
      </View>
      <View style={styles.individualRating}>
        <Text>2</Text>
        <ProgressBar
          style={styles.progressBars}
          progress={0.3}
          color="orange"
        />
        <Text>(500)</Text>
      </View>
      <View style={styles.individualRating}>
        <Text>1</Text>
        <ProgressBar style={styles.progressBars} progress={0.8} color="red" />
        <Text>(500)</Text>
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    maxHeight: 120,
    flexDirection: "row",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  ratingSection: {
    top: 30,
    flexDirection: "row",
    left: 0,
  },
  overallrating: { fontSize: 40 },
  ratingImage: {
    top: 25,
    width: 20,
    height: 20,
    maxHeight: 30,
    borderRadius: 400 / 2,
  },
  verticalLine: {
    marginLeft: 5,
    width: 2,
    height: "100%",
    backgroundColor: "black",
  },
  progressBarsColumn: {
    left: 10,
    flexDirection: "column",
    top: 0,
  },
  progressBars: {
    flexDirection: "column",
    width: 200,
    height: 10,
    top: 5,
  },
  individualRating: {
    flexDirection: "row",
  },
});
export default RatingsSection;

import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import productImages from "../Images/productImages";
import CommentCard from "./CommentCard";

const CommentsSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productImages.filter((item) => item.category === "t-shirt")}
        renderItem={({ item }) => <CommentCard />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
export default CommentsSection;

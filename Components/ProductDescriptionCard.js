import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
const ProductDescriptionCard = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>BRAND NAME</Title>
      </Card.Content>

      <View style={styles.horizontalLine}></View>
      <Card.Content>
        <Paragraph>SLIM FIT STRIPED CASUAL SHIRT</Paragraph>
      </Card.Content>
      <View style={styles.horizontalLine}></View>
      <Card.Content>
        <View style={styles.priceContainer}>
          <Text>Actual Price : </Text>
          <FontAwesome
            name="rupee"
            size={14}
            color="black"
            style={{ top: 4 }}
          />
          <Text style={styles.ActualMRP}>1025</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>Discount Price : </Text>
          <FontAwesome
            name="rupee"
            size={12}
            color="black"
            style={{ top: 4 }}
          />
          <Text style={styles.discountPrice}>820</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>Discount : </Text>
          <Text style={styles.discountPercentage}>(48% OFF)</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    marginLeft: 0,
    maxHeight: 450,
    width: "100%",
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#909090",
  },
  ActualMRP: {
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  discountPrice: {
    fontSize: 14,
  },
  discountPercentage: {
    fontSize: 14,
    color: "red",
  },
  priceContainer: {
    flexDirection: "row",
  },
});

export default ProductDescriptionCard;

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const ShopCard = () => {
  return (
    <>
      <Card style={styles.container}>
        <Card.Content>
          <Title>Shop Name</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png",
          }}
        />
        <Card.Content>
          <Paragraph>
            Shop Description Shop Description Shop Description Shop Description
            Shop Description Shop Description
          </Paragraph>
        </Card.Content>
        <View style={styles.horizontalLine}></View>
        <Card.Content>
          <Paragraph>
            Review Section Review Section Review Section Review Section Review
            Section Review Section
          </Paragraph>
        </Card.Content>
        <View style={styles.horizontalLine}></View>
        <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 20,
    maxHeight: 450,
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#909090",
  },
});

export default ShopCard;

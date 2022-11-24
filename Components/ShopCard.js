import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const ShopCard = () => {
  return (
    <>
      <Card style={Styles.container}>
        <Card.Content>
          <Title>Geeks For Geeks</Title>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png",
          }}
        />
        <Card.Content>
          <Paragraph>A Computer Science portal for Geeks</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 20,
    maxHeight: 400,
  },
});

export default ShopCard;

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { addToWishList, removeFromWishList } from "../Store/wishlist";
import { removeFromCart } from "../Store/cart";
import { useDispatch } from "react-redux";

const CartItemCard = (props) => {
  const size = "M";
  const qty = "1";
  console.log(props.item.item.desc);
  const dispatch = useDispatch();

  const moveItemToWishlistHandler = () => {
    console.log("moveItemToWishlist cart");
    dispatch(addToWishList({ item: props.item.item }));
    console.log("removing from cart");
    dispatch(removeFromCart({ item: props.item.item }));
  };

  const removeFromCartHandler = () => {
    console.log("removeFromCart cart");
    dispatch(removeFromCart({ item: props.item.item }));
  };
  return (
    <Card style={Styles.container}>
      <View style={Styles.description}>
        <Card.Cover
          style={Styles.image}
          source={{
            uri: props.item.item.image,
          }}
        />
        <Card.Content style={Styles.pricing}>
          <Text numberOfLines={1}>{props.item.item.desc}</Text>
          <Text numberOfLines={1}>Item Description</Text>
          <Text numberOfLines={1}>Seller</Text>
          <View style={Styles.descButtons}>
            <Button>
              Size
              {size}
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Button>
            <Button>
              qty
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Button>
          </View>
          <View style={Styles.priceContainer}>
            <Text>{props.item.item.price}</Text>
            <Text> APrice </Text>
            <Text> Discount </Text>
          </View>
          <Text>Savings</Text>
        </Card.Content>
      </View>
      <Card.Actions style={Styles.actions}>
        <Button
          style={Styles.actionButtons}
          onPress={moveItemToWishlistHandler}
        >
          Move To Wishlist
        </Button>
        <Button style={Styles.actionButtons} onPress={removeFromCartHandler}>
          remove from cart
        </Button>
      </Card.Actions>
    </Card>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    margin: 20,
  },
  description: {
    flex: 1,
    margin: 10,
    maxHeight: 120,
    maxWidth: 250,
    flexDirection: "row",
  },
  image: {
    flex: 0.5,
    maxHeight: 150,
  },
  actions: {
    flex: 1,
  },
  pricing: {
    flex: 0.7,
    maxHeight: 100,
    maxWidth: 200,
  },
  descButtons: {
    flexDirection: "row",
  },
  actionButtons: {
    maxWidth: 100,
    left: 100,
  },
  priceContainer: {
    flexDirection: "row",
  },
});

export default CartItemCard;

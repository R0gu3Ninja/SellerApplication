import React from "react";
import { FlatList, Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { Foundation, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { removeFromCart } from "../Store/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
  return (
    <>
      <ScrollView>
        <View>
          <FlatList
            data={cartItems}
            renderItem={(item) => <CartItemCard item={item} />}
          />
        </View>
        <View>
          <Card>
            <Card.Content>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Bag Total</Text>
                <Text style={Styles.priceViewPrice}>1000</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Bag Savings</Text>
                <Text style={Styles.priceViewPrice}>200</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Discount</Text>
                <Text style={Styles.priceViewPrice}>20</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Bag Total</Text>
                <Text style={Styles.priceViewPrice}>1000</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Amount Payable</Text>
                <Text style={Styles.priceViewPrice}>1000</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
      <Button>Place Order</Button>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    flexDirection: "column",
  },
  priceView: {
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
  },
  priceViewDesc: {
    flex: 1,
    alignContent: "center",
    left: 20,
  },
  priceViewPrice: {
    right: 10,
  },
});

export default Cart;

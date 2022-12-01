import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { Foundation, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
  const totalAmount = useSelector(
    (state) => state.cartItemsReducer.totalAmount
  );
  const totalDiscount = useSelector(
    (state) => state.cartItemsReducer.totalDiscount
  );

  return (
    <>
      <ScrollView>
        <View>
          <FlatList
            data={cartItems}
            renderItem={(item) => {
              return <CartItemCard item={item} />;
            }}
          />
        </View>
        <View>
          <Card>
            <Card.Content style={Styles.cardContent}>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Bag Total</Text>
                <Text style={Styles.priceViewPrice}>{totalAmount}</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Discount</Text>
                <Text style={Styles.priceViewPrice}>{totalDiscount}</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Delivery Fee</Text>
                <Text style={Styles.priceViewPrice}>Free</Text>
              </View>
              <View style={Styles.priceView}>
                <Text style={Styles.priceViewDesc}>Amount Payable</Text>
                <Text style={Styles.priceViewPrice}>
                  {totalAmount - totalDiscount}
                </Text>
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
  cardContent: {},
});

export default Cart;

import React, { useCallBack, useState, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  FlatList,
  Alert,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { addToCart } from "../Store/cart";
import { removeFromWishList } from "../Store/wishlist";
import { useDispatch } from "react-redux";
const SelectSizeModal = (props) => {
  const sheetRef = useRef(BottomSheet);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["20%"];
  const availableSizes = ["S", "M", "L", "XL", "XXL"];
  const [sizeSelected, setSizeSelected] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    console.log("checking for size sizeSelected : " + sizeSelected);
    if (sizeSelected) {
      dispatch(addToCart({ item: props.item }));
      console.log("removeItemFromWishListHandler " + props.item);
      dispatch(removeFromWishList({ item: props.item }));
      sheetRef.current.close();
    } else {
      Alert.alert("select size");
    }
  };
  const addSizeToProduct = (itemSize) => {
    console.log("getting item : " + props.item);
    console.log("Adding size to product : " + itemSize);
    //props.item.itemSize = itemSize;
    setSizeSelected(true);
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => setIsOpen(false)}
    >
      <BottomSheetView>
        <View>
          <Text>Select Size</Text>
        </View>
        <View style={styles.sizeView}>
          {availableSizes.map((item) => (
            <Button
              title={item}
              style={styles.sizeButton}
              color="blue"
              onPress={() => addSizeToProduct(item)}
            ></Button>
          ))}
        </View>
        <Button title="ADD TO CART" onPress={addToCartHandler} color="gray" />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sizeButton: {
    margin: 5,
    flex: 1,
    width: 5,
    height: 20,
    maxHeight: 20,
    borderRadius: 5,
    alignContent: "space-between",
    justifyContent: "flex-start",
  },
  sizeView: {
    flexDirection: "row",
  },
});
export default SelectSizeModal;

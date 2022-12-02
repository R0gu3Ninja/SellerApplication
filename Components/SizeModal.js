import React, { useCallback, useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  FlatList,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { addToCart } from "../Store/cart";
import { removeFromWishList } from "../Store/wishlist";
import { useDispatch } from "react-redux";

const ModalOptions = ({ sizeOption, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{sizeOption}</Text>
    </Pressable>
  );
};

const SizeModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const availableSizes = ["S", "M", "L", "XL", "XXL"];
  const [sizeSelected, setSizeSelected] = useState(false);
  const dispatch = useDispatch();

  console.log("is modalVisible : " + modalVisible);

  const addToCartHandler = () => {
    console.log("checking for size sizeSelected : " + sizeSelected);
    if (sizeSelected) {
      dispatch(addToCart({ item: props.item }));
      console.log("removeItemFromWishListHandler " + props.item);
      dispatch(removeFromWishList({ item: props.item }));
      setModalVisible(!modalVisible);
      console.log("Added to cart successful");
      props.test(true);
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

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, []);

  useEffect(() => {
    console.log("size changed : " + sizeSelected);
  }, [sizeSelected]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {availableSizes.map((item) => (
              <ModalOptions
                sizeOption={item}
                onPress={() => addSizeToProduct(item)}
              ></ModalOptions>
            ))}
          </View>
          <Button title="ADD TO CART" onPress={addToCartHandler} color="gray" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SizeModal;

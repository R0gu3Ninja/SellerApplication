import React, { forwardRef, useState, useImperativeHandle } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { StyleSheet, View, Pressable, Text, Button } from "react-native";
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
const SizeModalNew = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const availableSizes = ["S", "M", "L", "XL", "XXL"];
  const [sizeSelected, setSizeSelected] = useState(false);
  useImperativeHandle(ref, () => ({
    showModal() {
      console.log("Displaying Similar Items Modal : " + visible);
      setVisible(true);
      console.log("Displaying Similar Items Modal 222 : " + visible);
    },
  }));
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    console.log("checking for size sizeSelected : " + sizeSelected);
    if (sizeSelected) {
      dispatch(addToCart({ item: props.item }));
      console.log("removeItemFromWishListHandler " + props.item);
      dispatch(removeFromWishList({ item: props.item }));
      setVisible(false);
      console.log("Added to cart successful");
    } else {
      console.log("size not selected : " + sizeSelected);
    }
  };
  const addSizeToProduct = (itemSize) => {
    console.log("getting item : " + props.item);
    console.log("Adding size to product : " + itemSize);
    setSizeSelected(true);
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <Text style={styles.selectHeader}>Select Size</Text>
          <View style={styles.modalView}>
            {availableSizes.map((item) => (
              <ModalOptions
                sizeOption={item}
                onPress={() => addSizeToProduct(item)}
              ></ModalOptions>
            ))}
          </View>
          <Button
            style={styles.addToCart}
            title="ADD TO CART"
            onPress={addToCartHandler}
            color="gray"
          />
        </Modal>
      </Portal>
    </Provider>
  );
});
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 80,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  containerStyle: {
    maxHeight: 200,
    backgroundColor: "red",
  },
  selectHeader: {
    fontSize: 20,
    color: "white",
  },
});
export default SizeModalNew;

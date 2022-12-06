import React, { forwardRef, useState, useImperativeHandle } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addProductDetails } from "../Store/productDetails";
const ModalOptions = ({ color, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{color}</Text>
    </Pressable>
  );
};
const ColorsModal = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const addColorToProductBuilder = (item) => {
    console.log("Adding Size: " + item);
    dispatch(addProductDetails({ item: "color: " + item, key: 1 }));
  };
  const [visible, setVisible] = useState(false);

  const availableColors = [
    "RED",
    "BLUE",
    "BLACK",
    "WHITE",
    "GREY",
    "YELLOW",
    "PINK",
    "GREEN",
    "BROWN",
  ];
  const [colorSelected, setcolorSelected] = useState("");

  const addColorToProduct = (itemColor) => {
    console.log("Adding size to product : " + itemColor);
    setcolorSelected(itemColor);
    addColorToProductBuilder(itemColor);
  };

  useImperativeHandle(ref, () => ({
    showModal() {
      setVisible(true);
    },
  }));
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <Text style={styles.selectHeader}>Sort By</Text>

          <View style={styles.modalView}>
            {availableColors.map((color) => (
              <ModalOptions
                color={color}
                onPress={() => addColorToProduct(color)}
              ></ModalOptions>
            ))}
          </View>
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
    left: 60,
    top: -10,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
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

  containerStyle: {
    maxHeight: 400,
    backgroundColor: "red",
  },
  selectHeader: {
    fontSize: 20,
    color: "white",
  },
});
export default ColorsModal;

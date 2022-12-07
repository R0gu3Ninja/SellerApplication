import React, { forwardRef, useState, useImperativeHandle } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addProductDetails } from "../../Store/productDetails";
const ModalOptions = ({ collar, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{collar}</Text>
    </Pressable>
  );
};
const CollarModal = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const addCollarToProductBuilder = (item) => {
    dispatch(addProductDetails({ item: item, key: 6 }));
  };
  const [visible, setVisible] = useState(false);

  const availableTypess = ["Roud", "V-Neck", "Chinese", "Collar"];
  const [typeSelected, setTypeSelected] = useState("");
  const addCollarToProduct = (collarType) => {
    console.log("Adding type to product : " + collarType);
    setTypeSelected(collarType);
    addCollarToProductBuilder(collarType);
    hideModal();
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
          <View style={styles.modalView}>
            {availableTypess.map((collar) => (
              <ModalOptions
                collar={collar}
                onPress={() => addCollarToProduct(collar)}
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
export default CollarModal;

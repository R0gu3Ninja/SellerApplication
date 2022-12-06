import React, { forwardRef, useState, useImperativeHandle } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ModalOptions = ({ productOption, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{productOption}</Text>
    </Pressable>
  );
};
const AddProductModal = forwardRef((props, ref) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal() {
      console.log("Displaying Similar Items Modal : " + visible);
      setVisible(true);
    },
  }));
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={styles.modalView}>
            <ModalOptions
              productOption="Shirts"
              onPress={() => navigation.navigate("ShirtUploadDetails")}
            ></ModalOptions>
            <ModalOptions
              productOption="T-Shirt"
              onPress={() => navigation.navigate("TShirtUpload")}
            ></ModalOptions>
            <ModalOptions
              productOption="Jeans"
              onPress={() => navigation.navigate("JeansUpload")}
            ></ModalOptions>
            <ModalOptions
              productOption="Trousers"
              onPress={() => navigation.navigate("TrousersUpload")}
            ></ModalOptions>
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
export default AddProductModal;

import React, { forwardRef, useState, useImperativeHandle } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { StyleSheet, View, Pressable, Text } from "react-native";

const ModalOptions = ({ sortOption, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{sortOption}</Text>
    </Pressable>
  );
};
const SortModalNew = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState("NEWEST_ARRIVALS");

  const setFilterCriteriaHandler = (filterCriteria) => {
    console.log("filter Criteria : " + filterCriteria);
    setFilterCriteria(filterCriteria);
    hideModal();
  };
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
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <Text style={styles.selectHeader}>Sort By</Text>

          <View style={styles.modalView}>
            <ModalOptions
              sortOption="Newest Arrivals"
              onPress={() => setFilterCriteriaHandler("NEWEST_ARRIVALS")}
            ></ModalOptions>
            <ModalOptions
              sortOption="Customer Reviews"
              onPress={() => setFilterCriteriaHandler("CUSTOMER_REVIEWS")}
            ></ModalOptions>
            <ModalOptions
              sortOption="Price Low to High"
              onPress={() => setFilterCriteriaHandler("LOW_TO_HIGH")}
            ></ModalOptions>
            <ModalOptions
              sortOption="Discount"
              onPress={() => setFilterCriteriaHandler("DISCOUNT")}
            ></ModalOptions>
            <ModalOptions
              sortOption="Price High to Low"
              onPress={() => setFilterCriteriaHandler("HIGH_TO_LOW")}
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
export default SortModalNew;

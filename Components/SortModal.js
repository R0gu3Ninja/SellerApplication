import React, { useEffect, useState, useRef } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ModalOptions = ({ sortOption, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{sortOption}</Text>
    </Pressable>
  );
};
const SortModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState("NEWEST_ARRIVALS");

  useEffect(() => {
    setModalVisible(!modalVisible);
  }, []);

  useEffect(() => {
    console.log("filter criteria changed : " + filterCriteria);
  }, [filterCriteria]);

  const setFilterCriteriaHandler = (filterCriteria) => {
    setFilterCriteria(filterCriteria);
    setModalVisible(!modalVisible);
  };

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

export default SortModal;

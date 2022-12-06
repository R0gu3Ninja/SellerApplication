import { React, useRef } from "react";
import { StyleSheet, View, SafeAreaView, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddProductModal from "../SellerComponents/AddProductModal";
const HomeScreen = ({ navigation }) => {
  const AddProductModalRef = useRef();
  const displaySelectionsModal = () => {
    AddProductModalRef.current.showModal();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addFileView}>
        <Pressable onPress={displaySelectionsModal}>
          <AntDesign name="addfile" size={80} color="black" />
        </Pressable>
      </View>
      <AddProductModal ref={AddProductModalRef} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addFileView: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;

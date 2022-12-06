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
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Pressable
            onPress={displaySelectionsModal}
            style={styles.headerIcons}
          >
            <AntDesign name="addfile" size={24} color="black" />
          </Pressable>
        </View>
        <AddProductModal ref={AddProductModalRef} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  statusbar: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
  },
});
export default HomeScreen;

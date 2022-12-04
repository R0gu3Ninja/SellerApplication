import React, { forwardRef, useState, useImperativeHandle } from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import productImages from "../Images/productImages";
import { useNavigation } from "@react-navigation/native";
import userImages from "../Images/userImages.png";
import ProductDescriptionCard from "./ProductDescriptionCard";
const SimilarItemsModal = forwardRef((props, ref) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal() {
      console.log("Displaying Similar Items Modal : " + visible);
      setVisible(true);
      console.log("Displaying Similar Items Modal 222 : " + visible);
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
          <View style={styles.productCarousel}>
            <FlatList
              data={productImages.filter((item) => item.category === "t-shirt")}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      hideModal();
                      console.log("coming here 2222 :: " + item.productId);
                      navigation.navigate("ProductDisplayScreen", {
                        item: item,
                      });
                    }}
                  >
                    <View style={{ margin: 1, width: 150 }}>
                      <Image
                        style={styles.imageThumbnail}
                        source={userImages}
                      />
                      <ProductDescriptionCard style={{ width: 150 }} />
                    </View>
                  </TouchableOpacity>
                </>
              )}
              //Setting the number of column
              horizontal
              keyExtractor={(item, index) => index}
            />
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
});
const styles = StyleSheet.create({
  productCarousel: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight: 600,
    maxWidth: 400,
    alignContent: "center",
  },
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 150,
  },
});
export default SimilarItemsModal;

import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useState, useRef } from "react";
import ColorsModal from "./ColorsModal";
import TypesModal from "./TypesModal";
import DesignModal from "./DesignModal";
import { useDispatch, useSelector } from "react-redux";
import { addProductDetails } from "../Store/productDetails";
import { useNavigation } from "@react-navigation/native";
import AddProductImages from "./AddProductImages";

const SizeOptions = ({ sizeOption, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <Text style={styles.textStyle}>{sizeOption}</Text>
    </Pressable>
  );
};

const gotoAddImagesScreen = () => {
  console.log("gotoAddImagesScreen");
};
const ShirtUploadDetails = () => {
  const availableSizes = ["S", "M", "L", "XL", "XXL"];
  const [sizeSelected, setSelectedSize] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const addSizeToProduct = (itemSize) => {
    console.log("Adding size to product : " + itemSize);
    setSelectedSize(itemSize);
    addSizeToProductBuilder(itemSize);
  };

  const addSizeToProductBuilder = (item) => {
    console.log("Adding Size: " + item);
    dispatch(addProductDetails({ item: "size: " + item, key: 0 }));
  };
  const addPriceToProductBuilder = (item) => {
    console.log("Adding Price: " + item);
    dispatch(addProductDetails({ item: "price: " + item, key: 4 }));
  };
  const ColorsModalRef = useRef();
  const TypesModalRef = useRef();
  const DesignModalRef = useRef();
  const openTypesModal = () => {
    TypesModalRef.current.showModal();
  };

  const openColorsModal = () => {
    ColorsModalRef.current.showModal();
  };

  const openDesignModal = () => {
    DesignModalRef.current.showModal();
  };

  return (
    <View>
      <View style={styles.sizeDisplay}>
        {availableSizes.map((item) => (
          <SizeOptions
            sizeOption={item}
            onPress={() => addSizeToProduct(item)}
          ></SizeOptions>
        ))}
      </View>
      <View>
        <Pressable onPress={openColorsModal}>
          <Text style={styles.textStyle}>SELECT Colors</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openTypesModal}>
          <Text style={styles.textStyle}>SELECT Type</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openDesignModal}>
          <Text style={styles.textStyle}>SELECT Design</Text>
        </Pressable>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="price"
        keyboardType="numeric"
      />
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => addPriceToProductBuilder(price)}
      >
        <Text style={styles.textStyle}>Add Price</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => navigation.navigate("AddProductImages")}
      >
        <Text style={styles.textStyle}>Add Images</Text>
      </Pressable>
      <ColorsModal ref={ColorsModalRef} />
      <TypesModal ref={TypesModalRef} />
      <DesignModal ref={DesignModalRef} />
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sizeView: {
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
    maxHeight: 2000,
    backgroundColor: "red",
  },
  selectHeader: {
    fontSize: 20,
    color: "white",
  },
  sizeDisplay: {
    flexDirection: "row",

    width: 200,
    height: 70,
    maxHeight: 70,
    borderRadius: 400 / 2,
    justifyContent: "flex-start",
  },
});
export default ShirtUploadDetails;

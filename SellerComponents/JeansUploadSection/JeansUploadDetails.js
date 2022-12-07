import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useState, useRef } from "react";
import ColorsModal from "./ColorsModal";
import FabricModal from "./FabricModal";
import TypesModal from "./TypesModal";
import DesignModal from "./DesignModal";
import { useDispatch, useSelector } from "react-redux";
import { addProductDetails } from "../../Store/productDetails";
import { useNavigation } from "@react-navigation/native";

const JeansUploadDetails = () => {
  const ColorsModalRef = useRef();
  const TypesModalRef = useRef();
  const DesignModalRef = useRef();

  const FabricModalRef = useRef();
  const availableSizes = ["28", "30", "32", "34", "36"];
  const [sizeSelected, setSelectedSize] = useState(false);
  const [actualPrice, setActualPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const SizeOptions = ({ sizeOption, onPress }) => {
    return (
      <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
        <Text style={styles.textStyle}>{sizeOption}</Text>
      </Pressable>
    );
  };

  const addSizeToProduct = (itemSize) => {
    console.log("Adding size to product : " + itemSize);
    setSelectedSize(true);
    addSizeToProductBuilder(itemSize);
    addCategoryToProductBuilder();
  };

  const addCategoryToProductBuilder = () => {
    dispatch(addProductDetails({ item: "JEANS", key: 0 }));
  };
  const addSizeToProductBuilder = (item) => {
    console.log("Adding Size: " + item);
    dispatch(addProductDetails({ item: item, key: 1 }));
  };
  const addPriceToProductBuilder = (item) => {
    console.log("Adding Price: " + item);
    dispatch(addProductDetails({ item: item, key: 5 }));
  };

  const calculateDiscountPrice = (discount) => {
    console.log("Adding Price: " + item);
    dispatch(addProductDetails({ item: item, key: 5 }));
  };

  const openTypesModal = () => {
    TypesModalRef.current.showModal();
  };

  const openColorsModal = () => {
    ColorsModalRef.current.showModal();
  };

  const openDesignModal = () => {
    DesignModalRef.current.showModal();
  };
  const openFabricModal = () => {
    FabricModalRef.current.showModal();
  };
  const openCollarModal = () => {
    CollarModalRef.current.showModal();
  };

  return (
    <View>
      <View style={styles.sizeDisplay}>
        {availableSizes.map((item) => (
          <SizeOptions
            sizeOption={item}
            onPress={() => addSizeToProduct(item)}
            sizeSelected={sizeSelected}
          ></SizeOptions>
        ))}
      </View>
      <View>
        <Pressable onPress={openColorsModal}>
          <Text style={styles.textStyle}>Select Color</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openTypesModal}>
          <Text style={styles.textStyle}>Select Type</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openDesignModal}>
          <Text style={styles.textStyle}>Select Design</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openFabricModal}>
          <Text style={styles.textStyle}>Select Fabric</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openCollarModal}>
          <Text style={styles.textStyle}>Select Collar</Text>
        </Pressable>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setActualPrice}
        value={actualPrice}
        placeholder="Actual Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDiscountPrice}
        value={discountPrice}
        placeholder="Discount price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={() => calculateDiscountPrice()}
        value={discountPercentage}
        placeholder="Discount %"
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

      <FabricModal ref={FabricModalRef} />
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
  coloredButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color: "red",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginBottom: 10,
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
    left: 50,
    width: 200,
    height: 70,
    maxHeight: 70,
    borderRadius: 400 / 2,
    justifyContent: "flex-start",
  },
});
export default JeansUploadDetails;

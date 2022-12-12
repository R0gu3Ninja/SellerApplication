import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useState, useRef } from "react";
import ColorsModal from "./ColorsModal";
import FabricModal from "./FabricModal";
import TypesModal from "./TypesModal";
import DesignModal from "./DesignModal";
import { useDispatch, useSelector } from "react-redux";
import { addProductDetails } from "../../Store/productDetails";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
const TrousersUploadDetails = () => {
  const ColorsModalRef = useRef();
  const TypesModalRef = useRef();
  const DesignModalRef = useRef();

  const FabricModalRef = useRef();
  const availableSizes = ["28", "30", "32", "34", "36"];
  const [sizeSelected, setSelectedSize] = useState(false);
  const [actualPrice, setActualPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [designSelected, setDesignSelected] = useState("");
  const [fabricSelected, setFabricSelected] = useState("");

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
    dispatch(addProductDetails({ item: "TOPS", key: 0 }));
  };
  const addSizeToProductBuilder = (item) => {
    console.log("Adding Size: " + item);
    dispatch(addProductDetails({ item: item, key: 1 }));
  };
  const addActualPriceToProductBuilder = (item) => {
    console.log("Adding Price: " + item);
    dispatch(addProductDetails({ item: item, key: 5 }));
  };
  const addDiscountPriceToProductBuilder = (discountPrice) => {
    console.log("Adding Discount Price: " + discountPrice);
    setDiscountPrice(discountPrice);
    let discountPercentage = Math.floor(
      ((actualPrice - discountPrice) / actualPrice) * 100
    );
    dispatch(addProductDetails({ item: discountPrice, key: 8 }));
    dispatch(addProductDetails({ item: discountPercentage, key: 9 }));
  };

  const getColorFromModal = (colorFromModal) => {
    console.log(colorFromModal);
    setColorSelected(colorFromModal);
  };

  const getTypeFromModal = (typeFromModal) => {
    console.log(typeFromModal);
    setTypeSelected(typeFromModal);
  };

  const getDesignFromModal = (designFromModal) => {
    setDesignSelected(designFromModal);
  };

  const getFabricFromModal = (fabricFromModal) => {
    setFabricSelected(fabricFromModal);
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
          {colorSelected.length > 0 ? (
            <Text style={styles.textStyle}>{colorSelected}</Text>
          ) : (
            <Text style={styles.textStyle}>Select Color</Text>
          )}
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openTypesModal}>
          {typeSelected.length > 0 ? (
            <Text style={styles.textStyle}>{typeSelected}</Text>
          ) : (
            <Text style={styles.textStyle}>Select Type</Text>
          )}
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openDesignModal}>
          {designSelected.length > 0 ? (
            <Text style={styles.textStyle}>{designSelected}</Text>
          ) : (
            <Text style={styles.textStyle}>Select Design</Text>
          )}
        </Pressable>
      </View>
      <View>
        <Pressable onPress={openFabricModal}>
          {fabricSelected.length > 0 ? (
            <Text style={styles.textStyle}>{fabricSelected}</Text>
          ) : (
            <Text style={styles.textStyle}>Select Fabric</Text>
          )}
        </Pressable>
      </View>
      <View style={styles.amountSection}>
        <TextInput
          style={styles.input}
          onChangeText={setActualPrice}
          value={actualPrice}
          placeholder="Actual Price"
          keyboardType="numeric"
        />
        <Button onPress={() => addActualPriceToProductBuilder(actualPrice)}>
          Set Price
        </Button>
      </View>
      <View style={styles.amountSection}>
        <TextInput
          style={styles.input}
          onChangeText={setDiscountPrice}
          value={discountPrice}
          placeholder="Discount price"
          keyboardType="numeric"
        />
        <Button onPress={() => addDiscountPriceToProductBuilder(discountPrice)}>
          Set Discount Price
        </Button>
      </View>

      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => navigation.navigate("AddProductImages")}
      >
        <Text style={styles.textStyle}>Add Images</Text>
      </Pressable>

      <ColorsModal ref={ColorsModalRef} getColorFromModal={getColorFromModal} />
      <TypesModal ref={TypesModalRef} getTypeFromModal={getTypeFromModal} />
      <DesignModal
        ref={DesignModalRef}
        getDesignFromModal={getDesignFromModal}
      />
      <FabricModal
        ref={FabricModalRef}
        getFabricFromModal={getFabricFromModal}
      />
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
    width: 150,
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
  amountSection: {
    flexDirection: "row",
  },
});
export default TrousersUploadDetails;

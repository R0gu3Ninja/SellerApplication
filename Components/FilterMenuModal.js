import React, { forwardRef, useState, useImperativeHandle } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Button } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { Checkbox } from "react-native-paper";

const FilterMenuModal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { id: "1", name: "Size" },
    { id: "2", name: "Color" },
    { id: "3", name: "Ratings" },
    { id: "4", name: "Type" },
    { id: "5", name: "Price Range" },
    { id: "6", name: "Discount" },
    { id: "7", name: "Type" },
  ]);
  const hideModal = () => setVisible(false);
  const [selectedItem, setSelectedItem] = useState("1");
  const [sizeFilter, setSizeFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);

  const sizeArray = ["S", "M", "L", "XL", "XXL"];
  const colorsArray = ["RED", "BLUE", "GREEN", "BLACK"];
  useImperativeHandle(ref, () => ({
    showModal() {
      setVisible(true);
    },
  }));

  const setSizeHandler = (sizeInput, checked) => {
    checked
      ? setSizeFilter((sizeFilter) => [...sizeFilter, sizeInput])
      : setSizeFilter(
          sizeFilter.filter((sizeFilter) => sizeFilter != sizeInput)
        );

    console.log([...sizeFilter]);
  };

  const setColorHandler = (colorInput, checked) => {
    checked
      ? setColorFilter((colorFilter) => [...colorFilter, colorInput])
      : setColorFilter(
          colorFilter.filter((colorFilter) => colorFilter != colorInput)
        );

    console.log([...colorFilter]);
  };
  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}
          >
            <View style={styles.headerSection}>
              <View style={{ top: 15, fontSize: 30 }}>
                <Text>Filters</Text>
              </View>
              <View style={{ left: "600%" }}>
                <Button title="CLEAR ALL"></Button>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.headerSection}>
              <View style={styles.menuColumn}>
                {menuItems.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => setSelectedItem(item.id)}
                      style={[
                        styles.menuItem,
                        item.id === selectedItem
                          ? styles.selectedMenuItem
                          : null,
                      ]}
                    >
                      <Text style={styles.menuItemText}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={styles.settingsColumn}>
                {selectedItem === "1" && (
                  <View style={styles.settingsView}>
                    {sizeArray.map((size) => {
                      let checked = "false";
                      return (
                        <Checkbox.Item
                          label={size}
                          status={checked ? "checked" : "unchecked"}
                          onPress={() => {
                            checked = !checked;
                            setSizeHandler(size, !checked);
                          }}
                        />
                      );
                    })}
                  </View>
                )}
                {selectedItem === "2" && (
                  <View style={styles.settingsView}>
                    {colorsArray.map((color) => {
                      let checked = "false";
                      return (
                        <Checkbox.Item
                          label={color}
                          status={checked ? "checked" : "unchecked"}
                          onPress={() => {
                            checked = !checked;
                            setColorHandler(color, !checked);
                          }}
                        />
                      );
                    })}
                  </View>
                )}
                {selectedItem === "3" && (
                  <View style={styles.settingsView}>
                    <Checkbox.Item
                      label="5 and above"
                      status="unchecked"
                      onPress={() => setSizeHandler(color)}
                    />
                  </View>
                )}
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.footerButtons}>
              <View style={{ left: 0 }}>
                <Button title="cancel" onPress={() => hideModal()}></Button>
              </View>
              <View style={{ left: "600%" }}>
                <Button title="apply" style={styles.buttons}></Button>
              </View>
            </View>
            <View style={styles.horizontalLine}></View>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
});
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flex: 0.7,
  },

  // menu Column - left
  menuColumn: {
    flex: 0.5,
    flexDirection: "column",
    borderRightColor: "grey",
    borderRightWidth: 1,
  },
  menuItem: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 137,
    height: 30,
  },
  selectedMenuItem: {
    backgroundColor: "#F8F8FF",
    borderLeftColor: "black",
    borderLeftWidth: 5,
  },

  menuItemText: {
    marginLeft: 10,
    alignSelf: "flex-start",
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },

  // settings column -right
  settingsColumn: {
    flex: 0.6,
    padding: 15,
  },
  buttonsView: {
    flexDirection: "row",
    borderColor: "#fff",
    justifyContent: "center",
  },
  footerButtons: {
    flexDirection: "row",
  },
  containerStyle: {
    margin: 12,
    maxHeight: 1200,
    backgroundColor: "white",
  },
  headerSection: {
    flexDirection: "row",
  },
  horizontalLine: {
    height: 2,
    width: "100%",
    backgroundColor: "black",
  },
});
export default FilterMenuModal;

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
// All your menu options go here.

const FilterMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: "1", name: "Size" },
    { id: "2", name: "Color" },
    { id: "3", name: "Brand" },
    { id: "4", name: "Categories" },
    { id: "5", name: "Price Range" },
    { id: "6", name: "discount" },
  ]);

  // this holds the keys of the menuItems for the view to know which category is currently being rendered.
  const [selectedItem, setSelectedItem] = useState("1");
  return (
    <View style={styles.content}>
      <View style={styles.menuColumn}>
        {menuItems.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedItem(item.id)}
              style={[
                styles.menuItem,
                item.id === selectedItem ? styles.selectedMenuItem : null,
              ]}
            >
              <Text style={styles.menuItemText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.settingsColumn}>
        {/* Option 1: AGE */}
        {selectedItem === "1" && (
          <View style={styles.settingsView}>
            <Text>S</Text>
            <Text>M</Text>
            <Text>L</Text>
            <Text>XL</Text>
            <Text>XXL</Text>
          </View>
        )}
        {selectedItem === "2" && (
          <View style={styles.settingsView}>
            <Text>Red</Text>
            <Text>Blue</Text>
            <Text>Black</Text>
            <Text>Yellow</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //STYLES

  // CONTENT BODY
  content: {
    flexDirection: "row",
    flex: 0.7,
  },

  // menu Column - left
  menuColumn: {
    flex: 0.4,
    flexDirection: "column",
    borderRightColor: "grey",
    borderRightWidth: 1,
  },
  menuItem: {
    // flex: 1,
    flex: 0,

    justifyContent: "center",
    alignItems: "center",
    // alignItems: 'flex-start',
    // borderWidth:1,
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
});
export default FilterMenu;

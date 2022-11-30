import React, { useCallBack, useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomModal = () => {
  const sheetRef = useRef(BottomSheet);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["80%"];
  const handleClosePress = () => {
    sheetRef.current.close();
  };
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <Button
            title="New Arrivals"
            onPress={handleClosePress}
            color="gray"
          />
          <Button
            title="Price Low to High"
            onPress={handleClosePress}
            color="gray"
          />
          <Button title="Popularity" onPress={handleClosePress} color="gray" />
          <Button title="Discount" onPress={handleClosePress} color="gray" />
          <Button
            title="Customer Rating"
            onPress={handleClosePress}
            color="gray"
          />
          <Button
            title="Price High to Low"
            onPress={handleClosePress}
            color="gray"
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-start",
    opacity: 1,
  },
});
export default BottomModal;

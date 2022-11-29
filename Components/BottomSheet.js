import React, { useCallBack, useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomSheet = () => {
  const sheetRef = useRef < BottomSheet > null;
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["40%"];

  return (
    <View style={StyleSheet.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <Text>Hellow </Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

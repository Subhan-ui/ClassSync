import { View, Text, Pressable, StyleSheet } from "react-native";
import { CameraView } from "expo-camera/next";
import React from "react";
import tw from 'twrnc'


const Scanner = (props) => {
  const { scanned, handleBarCodeScanned, handleMarkAttendance } = props;
  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        // barcodeScannerSettings={{
        //  // barcodeTypes: ["qr", "pdf417"],
        // }}
        style={styles.absoluteFillObject}
      />
      {scanned ? (
        <View style={tw`h-full w-full bg-white flex justify-center `}>
          <Pressable
            onPress={handleMarkAttendance}
            style={tw` py-3 text-center bg-black rounded-xl mx-15 `}
          >
            <Text style={tw`text-white text-center`}>
              Do you want to mark your attendance up?
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={tw`w-full h-full flex justify-center items-center`}>
          <View style={tw`border-2 border-slate-600 h-60 w-60 rounded-xl`} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    absoluteFillObject: {
      flex: 1,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  });
  

export default Scanner;

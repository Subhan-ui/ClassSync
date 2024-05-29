import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Pressable, Alert } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import tw from "twrnc";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "../../store/useFetch";
import Scanner from "./Scanner";

const date = new Date();
// Get hours, minutes, and seconds from the date object
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Format the time as HH:MM:SS
const time = `${hours}:${minutes}:${seconds}`;

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const [marked, setMarked] = useState(true);
  // const [detail, setDetail] = useState({});
  const [data1, setData1] = useState({});
  // const fetchedData = useGetFetch(`details/${data1.email}`);

  // console.log(data1)
  const fetchedData1 = useFetch({
    link: "mark",
    body: {
      name: data1.name,
      agno: data1.agno,
      time: time,
      email: scannedData,
    },
  });

  useEffect(() => {
    (async () => {
      const dat = await AsyncStorage.getItem("data");
      setData1(JSON.parse(dat));
      // console.log(data1)
    })();
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();

    // (async () => {
    //   try {
    //     const details = await fetchedData();
    //     setDetail(details.data);
    //     // const response = await fetch(
    //     //   `http://192.168.3.37:3000/details/${data1.email}`,
    //     //   { headers: { "Content-Type": "application/json" } }
    //     // );
    //     // const res = await response.json();
    //     // setDetail(res);
    //     // console.log(detail);
    //     if (detail) {
    //       console.log(detail);
    //       console.log(detail.name, detail.agno);
    //       // console.log(data1)
    //     }
    //     // setScanned(false);
    //   } catch (error) {
    //     Alert.alert(error.message);
    //   }
    // })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScannedData(data);
    // console.log(data);
    setScanned(true);
    console.log("firstScanned");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleMarkAttendance = async () => {
    // await fetch(`http://192.168.3.37:3000/mark`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: detail.name,
    //     agno: detail.agno,
    //     time: time,
    //   }),
    // })
    try {
      const response = await fetchedData1();
      // console.log(response.ok);

      if (response.ok) {
        setScanned(true);
        Alert.alert("Your attendance has been marked");
        console.log("Your attendance marked.");
        setMarked(false);
      }
      console.log("function run");
    } catch (error) {
      console.log("run");
      console.log(err);
      Alert.alert("Your attendance is not mmarked.");
    }
  };

  return (
    <>
      {marked ? (
        <Scanner
          scanned={scanned}
          handleBarCodeScanned={handleBarCodeScanned}
          handleMarkAttendance={handleMarkAttendance}
        />
      ) : (
        <View  style={tw`absolute top-90 mx-10 `}>
         <Text style={tw`text-center font-bold text-3xl text-slate-600`}> Congratulations your attendance for this subject is marked now</Text>
        </View>
      )}
    </>
    // <View style={styles.container}>
    //   <CameraView
    //     onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
    //     // barcodeScannerSettings={{
    //     //  // barcodeTypes: ["qr", "pdf417"],
    //     // }}
    //     style={styles.absoluteFillObject}
    //   />
    //   {scanned ? (
    //     <View style={tw`h-full w-full bg-white flex justify-center `}>
    //       <Pressable
    //         onPress={handleMarkAttendance}
    //         style={tw` py-3 text-center bg-black rounded-xl mx-15 `}
    //       >
    //         <Text style={tw`text-white text-center`}>
    //           Do you want to mark your attendance up?
    //         </Text>
    //       </Pressable>
    //     </View>
    //   ) : (
    //     <View style={tw`w-full h-full flex justify-center items-center`}>
    //       <View style={tw`border-2 border-slate-600 h-60 w-60 rounded-xl`} />
    //     </View>
    //   )}
    // </View>
  );
}

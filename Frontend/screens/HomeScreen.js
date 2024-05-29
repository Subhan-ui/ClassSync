import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import QRCode from "react-native-qrcode-svg";
import tw from "twrnc";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";
import useGetFetch from "../store/useGetFetch";
import Header from "../layout/Header";

const date = new Date();
const year = date.getFullYear();

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const [QR, setQR] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await AsyncStorage.getItem("data");
      // const response =
      setData(JSON.parse(res));
      // console.log(data)
    })();
  }, []);

  const navigations = useNavigation();
  const fetched = useGetFetch("getAssign");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     const get = await fetched();

  //   })();
  // }, []);
  const handleLogout = async () => {
    const items = await AsyncStorage.getItem("data");
    if (items) {
      await AsyncStorage.clear();
      navigations.navigate("Login");
      dispatch(loginActions.loggedOut());
    }
  };
  return (
    <View
      style={tw`flex w-full h-full justify-center bg-[#EDB0C5] items-center`}
    >
      <Header />

      <View style={tw`absolute top-35`}>
        <Text style={tw`text-5xl font-bold text-[#ff0f63] `}>
          Hello {data.whoRU === "Admin" ? "Admin" : data.name}
        </Text>
      </View>
      <View style={tw`absolute top-50 mx-10 `}>
        <Text style={tw`text-justify text-[#ff0f63] text-lg`}>
          This is an app where you can mark your attendance as well as view your
          schedule in one place no need to open long pdfs to search for your
          schedule now just open the app and filter according to your
          preferences and voila got your class's schedule. Hope You Will Like
          Our App.
        </Text>
        <Text style={tw`text-center text-4xl mt-4`}>😉😉😏</Text>
      </View>

      <View style={tw`w-full absolute bottom-10`}>
        <Pressable
          style={tw` mx-10 mt-4 bg-[#ff528e] py-3 px-4 rounded-xl`}
          onPress={() => handleLogout()}
        >
          <Text style={tw`text-center text-white text-xl`}>Logout</Text>
        </Pressable>
      </View>
      <View style={tw`w-full absolute bottom-40`}>
        <Pressable
          style={tw` mx-10 mt-4 bg-[#ff528e] py-3 px-4 rounded-xl`}
          onPress={() => navigation.navigate("Schedule")}
        >
          <Text style={tw`text-center text-white text-xl`}>
            {data.whoRU === "Admin"
              ? "Want to change Teacher"
              : "Want to View your Schedule"}
          </Text>
        </Pressable>
      </View>
      <View
        style={tw`w-full absolute bottom-60 ${
          data.whoRU === "Admin" ? "hidden" : "block"
        }`}
      >
        <Pressable
          style={tw` mx-10 mt-4 bg-[#ff528e] py-3 px-4 rounded-xl`}
          onPress={() => navigation.navigate("Mark")}
        >
          <Text style={tw`text-center text-white text-xl`}>
            {data.whoRU === "Teacher"
              ? "Want to View Student's attendance?"
              : "Want to mark your attendance up?"}
          </Text>
        </Pressable>
      </View>
      <View style={tw`absolute bottom-4 `}>
        <Text style={tw`text-[#ff0f63]`}>
          Copyright © {year} Subhan Shoukat
        </Text>
      </View>
      {/* <View
        style={tw`border-2 border-slate-400 w-69 h-12 flex justify-center px-3 rounded-md mb-8`}
      >
        <TextInput
          style={tw`text-xl `}
          value={text}
          onChange={(text) => setText(text)}
        />
      </View>

      {text && (
        <Pressable
          onPress={() => setQR(true)}
          style={tw`border-2 py-3 px-5 rounded-xl mb-8`}
        >
          <Text>Generate QR Code</Text>
        </Pressable>
      )}
      {QR && (
        <View>
          <QRCode value={text.toString()} />
        </View>
      )}
      <StatusBar style="light" />
    </View> */}
      {/* // <>
    //   <View>
    //     <Text>This is HOme Page</Text>
    //   </View>
  // </> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import {
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/loginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "../store/useFetch";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
  const data = useSelector((state) => state.login.data);
  const [a, setA] = useState("");

  const [showPassword, setShow] = useState(true);
  const fetchedData = useFetch({
    link: "login",
    body: {
      name: data.name,
      agno: data.agno,
      email: data.email,
      password: data.password,
      teacher: data.whoRU === "Teacher" ? "1" : "0",
    },
  });
  useEffect(() => {
    if (data.whoRU === "Admin") {
      setA("Enter your login details");
    } else if (data.whoRU === "Teacher") {
      setA("Enter your special number");
    } else {
      setA("Enter your Registration Number");
    }
  }, [data.whoRU]);
  // const [loginData, setLoginData] = useState(null);
  const dispatch = useDispatch();
  // let email = data.email;
  const navigation = useNavigation();
  const handleEmail = (a) => {
    dispatch(loginActions.changeEmail(a));
  };
  const handlePassword = (a) => {
    dispatch(loginActions.changePassword(a));
  };
  const handleChangeName = (a) => {
    dispatch(loginActions.changeName(a));
  };
  const handleChangeAgno = (a) => {
    dispatch(loginActions.changeAgno(a));
  };

  const handleAdminLogin = () => {
    if (data.email === "admin@admin.com" && data.password === "admin") {
      Alert.alert("Welcome The admin of our app");
      AsyncStorage.setItem("data", JSON.stringify(data));
      navigation.navigate("tabs");
    } else {
      Alert.alert("Your password or email is incorrect");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetchedData();
      // console.log(user)
      // await axios
      //   .post(`http://192.168.3.37:3000/login`, user)
      //   .then((res) => {
      // console.log(response);

      // if (res.ok) {
      //   const response = await fetch(
      //     `https://backend-1908.web.app/details/${data.email}`,
      //     {

      //       headers: { "Content-Type": "application/json" },
      //     }
      //   );
      //   const user = await JSON.parse(response)
      // //   console.log(user);
      //   if (user) {
      //     setLoginData(user);
      // console.log(fetchedData)
      if (response.ok) {
        Alert.alert("Successfully Logged in");
        AsyncStorage.setItem("data", JSON.stringify(data));
        navigation.navigate("tabs");
        // } else {
        //   Alert.alert("Failed to get your data or your email isn't found");
        // }
        // }
        // console.log("first");
      } else {
        Alert.alert("Failed to login");
      }
    } catch (err) {
      Alert.alert("failed not " + err.message);
    }
  };

  return (
    <View style={tw`bg-[#EDB0C5] h-full`}>
      <TouchableHighlight
        style={tw`absolute top-10 left-4`}
        onPress={() => {
          AsyncStorage.removeItem("user");
          navigation.navigate("Asking");
        }}
      >
        <View style={tw`bg-[#EDB0C5] text-black`}>
          <AntDesign name="arrowleft" size={24} color="#ff0f63" />
        </View>
      </TouchableHighlight>
      <View style={tw`w-full h-[36%] flex justify-center items-center `}>
        <View style={tw`flex  justify-center `}>
          <Image
            source={require("../assets/logo.png")}
            style={tw`w-40 h-40 mt-20`}
          />
        </View>
        <View>
          <Text style={tw`font-bold text-3xl text-[#ff0f63]`}>{data.whoRU} Login</Text>
        </View>
      </View>
      <KeyboardAvoidingView style={tw`flex flex-col w-full justify-center `}>
        {data.whoRU !== "Admin" && (
          <View>
            <Text> </Text>
            <View
              style={tw`h-[45px] ml-12 mr-12 rounded-md border-2 border-[#ff0f63] flex items-center mt-8 flex-row`}
            >
              <FontAwesome6
                name="person"
                size={24}
                color="#ff0f63"
                style={tw`ml-2`}
              />
              <TextInput
                style={tw`ml-2 text-lg text-[#ff0f63] `}
                value={data.name}
                placeholderTextColor={"#ff0f63"}
                onChangeText={(text) => handleChangeName(text)}
                placeholder="Enter your Name"
                // placeholderTextColor={"gray"}
              />
            </View>
            <View
              style={tw`h-[45px] ml-12 mr-12 rounded-md border-2 border-[#ff0f63] flex items-center mt-8 flex-row`}
            >
              <MaterialIcons
                name="numbers"
                size={24}
                color="#ff0f63"
                style={tw`ml-2`}
              />
              <TextInput
                style={tw`ml-2 text-lg text-[#ff0f63]`}
                value={data.agno}
                onChangeText={(text) => handleChangeAgno(text)}
                placeholder={a}
                placeholderTextColor={"#ff0f63"}
              />
            </View>
          </View>
        )}
        <View
          style={tw`h-[45px] ml-12 mr-12 rounded-md border-2 border-[#ff0f63] flex items-center mt-8 flex-row`}
        >
          <Entypo name="email" size={24} color="#ff0f63" style={tw`ml-2`} />
          <TextInput
            value={data.email}
            onChangeText={(text) => handleEmail(text)}
            style={tw`ml-2 text-lg text-[#ff0f63]`}
            placeholder="Enter your email address"
            placeholderTextColor={"#ff0f63"}
          />
        </View>
        <View
          style={tw`h-[45px] ml-12 mr-12 rounded-md border-2 border-[#ff0f63] flex items-center mt-8 flex-row `}
        >
          <MaterialIcons
            name="password"
            size={24}
            color="#ff0f63"
            style={tw`ml-2 `}
          />
          <TextInput
            value={data.password}
            onChangeText={(text) => handlePassword(text)}
            style={tw`ml-2 text-lg text-[#ff0f63]`}
            placeholder="Enter your Password"
            secureTextEntry={showPassword}
            placeholderTextColor={"#ff0f63"}
          />
        </View>
        <View style={tw`flex justify-between flex-row mx-12 mt-2 `}>
          <Text
            style={tw`text-[#ff0f63]`}
            onPress={() => setShow((show) => !show)}
          >
            Show Password
          </Text>
          {/* <Text style={tw`text-slate-700`}>Forgot Password?</Text> */}
        </View>
        <TouchableHighlight
          onPress={data.whoRU !== "Admin" ? handleLogin : handleAdminLogin}
          style={tw`mt-10 rounded-full mx-12`}
        >
          <View
            style={tw`flex justify-center items-center py-3 px-4 rounded-full  bg-[#ff528e]  `}
          >
            <Text style={tw`text-white text-lg`}>Login</Text>
          </View>
        </TouchableHighlight>
        {!(data.whoRU === "Admin") && (
          <Pressable
            style={tw`mt-2 flex items-center`}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={tw`text-[#ff0f63]`}>Don't have an account Signup here.</Text>
          </Pressable>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

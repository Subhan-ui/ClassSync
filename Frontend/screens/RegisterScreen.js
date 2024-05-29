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
// import AsyncStorage from "react-native-async-storage/async-storage";
// import ReactNativeAsyncStorage from "react-native-async-storage/src/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";
import useFetch from "../store/useFetch";
import { AntDesign } from "@expo/vector-icons";

// import { MaterialIcons } from '@expo/vector-icons';

const RegisterScreen = () => {
  // const who = useSelector(state=>state.login.whoRU);
  const [showPassword, setShow] = useState(true);
  const data = useSelector((state) => state.login.data);
  const fetchedData = useFetch({
    link: "register",
    body: {
      email: data.email,
      agno: data.agno,
      name: data.name,
      password: data.password,
      teacher: data.whoRU === "Teacher" ? "1" : "0",
    },
  });
  const [a, setA] = useState("");
  useEffect(() => {
    if (data.whoRU === "Admin") {
      setA("Enter your login details");
    } else if (data.whoRU === "Teacher") {
      setA("Enter your special number");
    } else {
      setA("Enter your Registration Number");
    }
  }, [data.whoRU]);
  // const navigation = useNavigation();
  const handleRegister = async () => {
    try {
      const response = await fetchedData();
      // const response = await fetch(`http://192.168.3.37:3000/register`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: data.email,
      //     agno: data.agno,
      //     name: data.name,
      //     password: data.password,
      //   }),
      // });
      if (response.ok) {
        await AsyncStorage.setItem("data", JSON.stringify(data));
        Alert.alert("Registered Successfully");
        navigation.navigate("tabs");
        // console.log("ok");
      } else {
        // console.log("not ok");
        Alert.alert("response is not correct");
      }
    } catch (error) {
      // console.log("response:");

      Alert.alert("the error " + error);
      // console.log(error);
    }
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleChangeName = (a) => {
    dispatch(loginActions.changeName(a));
  };
  const handleChangeAgno = (a) => {
    dispatch(loginActions.changeAgno(a));
  };
  const handleChangeEmail = (a) => {
    dispatch(loginActions.changeEmail(a));
  };
  const handleChangePassword = (a) => {
    dispatch(loginActions.changePassword(a));
  };
  // console.log(data);

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
      <View style={tw`w-full h-[33%] flex justify-center items-center `}>
        <View style={tw`flex  justify-center `}>
          <Image
            source={require("../assets/logo.png")}
            style={tw`w-40 h-40 mt-20`}
          />
        </View>
        <View>
          <Text style={tw`font-bold text-3xl text-[#ff0f63]`}>Register {data.whoRU}</Text>
        </View>
      </View>
      <KeyboardAvoidingView style={tw`flex flex-col w-full justify-center `}>
        <View
          style={tw`h-[45px] ml-12 mr-12 rounded-md border-2 border-[#ff0f63] flex items-center mt-8 flex-row`}
        >
          <FontAwesome6 name="person" size={24} color="#ff0f63" style={tw`ml-2`} />
          <TextInput
            style={tw`ml-2 text-lg text-[#ff0f63]`}
            value={data.name}
            onChangeText={(text) => handleChangeName(text)}
            placeholder="Enter your Name"
            placeholderTextColor={"#ff0f63"}
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
        <View
          style={tw`h-[45px] ml-12 mr-12 rounded-md border-2 border-[#ff0f63] flex items-center mt-8 flex-row`}
        >
          <Entypo name="email" size={24} color="#ff0f63" style={tw`ml-2`} />
          <TextInput
            value={data.email}
            onChangeText={(text) => handleChangeEmail(text)}
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
            style={tw`ml-2`}
          />
          <TextInput
            value={data.password}
            onChangeText={(text) => handleChangePassword(text)}
            style={tw`ml-2 text-lg text-[#ff0f63]`}
            placeholder="Enter your Password"
            secureTextEntry={showPassword}
            placeholderTextColor={"#ff0f63"}
          />
        </View>
        <View style={tw`ml-12 mt-1 `}>
          <Text
            style={tw`text-[#ff0f63]`}
            onPress={() => setShow((show) => !show)}
          >
            Show Password{" "}
          </Text>
        </View>
        <TouchableHighlight
          onPress={handleRegister}
          style={tw`mt-16 rounded-full mx-12`}
        >
          <View
            style={tw`flex justify-center items-center py-3 px-4 bg-[#ff528e] rounded-full `}
          >
            <Text style={tw`text-white text-xl`}>Register</Text>
          </View>
        </TouchableHighlight>
        <Pressable
          style={tw`mt-2 flex items-center`}
          onPress={() => navigation.goBack("Register")}
        >
          <Text style={tw`text-[#ff0f63]`}>Already have an account? Go Back</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});

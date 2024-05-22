import { View, Text, Image, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { loginActions } from "../store/loginSlice";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Asking = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const pressHandler =async (some) => {
    dispatch(loginActions.identifyWho(some));
    navigation.navigate("Login");
  };
  return (
    <View style={tw`flex flex-col  justify-center items-center bg-[#EDB0C5] h-full`}>
      <Image
        source={require("../assets/logo.png")}
        style={tw`absolute top-18`}
      />

      <Text style={tw`absolute top-100 font-bold text-2xl text-[#ff0f63] `}>
        How do you want to login as?
      </Text>
      <TouchableHighlight
        style={tw`absolute top-150 rounded-full bg-[#ff528e]`}
        onPress={() => pressHandler("Admin")}
      >
        <View
          style={tw` py-3 w-[290px] rounded-full `}
        >
          <Text style={tw`text-white text-center text-xl`}>Admin</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={tw`absolute top-165 rounded-full bg-[#ff528e]`}
        onPress={() => pressHandler("Teacher")}
      >
        <View
          style={tw`  py-3 w-[290px] rounded-full `}
        >
          <Text style={tw`text-white text-center text-xl`}>Teacher</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={tw`absolute top-180 rounded-full bg-[#ff528e]`}
        onPress={() => pressHandler("Student")}
      >
        <View
          style={tw`  py-3 w-[290px] rounded-full `}
        >
          <Text style={tw`text-white text-center text-xl`}>Student</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};



export default Asking;

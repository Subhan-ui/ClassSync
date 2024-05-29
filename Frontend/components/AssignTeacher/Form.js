import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

const Form = (props) => {
  return (
    <View style={tw`flex flex-row w-full gap-4  items-center`}>
      <Text style={tw`text-md font-bold text-orange-600 `}>{props.teacher}</Text>
      <TextInput
        value={props.value}
        onChangeText={(t) => props.onChange(props.teacher, t)}
        style={tw`border-2 absolute right-1 border-orange-600 text-orange-600 w-65 h-10 rounded-full px-5 text-lg`}
      />
    </View>
  );
};

export default Form;

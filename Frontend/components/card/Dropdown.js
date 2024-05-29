import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";

const Dropdown = (props) => {
  const teachers = [
    ...new Set(props.originalItems.map((item) => item.teacher)),
  ];

  // console.log(typeof teachers)
  return (
    <>
      <Text style={tw`mx-6 text-[#ff0f63]`}>For Teachers</Text>
      <ScrollView horizontal>
        <View style={tw`mx-4 flex flex-row`}>
          <Pressable
            onPress={props.setAll}
            style={tw`border-2 w-17 border-[#ff0f63] rounded-lg my-3 mx-1`}
          >
            <Text style={tw`text-center text-[#ff0f63]`}>All</Text>
          </Pressable>
          {teachers.map((item, index) => (
            <Pressable
              onPress={() => props.filtered(item)}
              style={tw`border-2 w-17 border-[#ff0f63] rounded-lg my-3 mx-1`}
              key={index}
            >
              <Text style={tw`text-center text-[#ff0f63]`}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Dropdown;

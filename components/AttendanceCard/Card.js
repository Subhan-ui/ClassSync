import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

const Card = (props) => {
  return (
    <ScrollView style={tw`mt-10 mx-5`}>
      <View
        style={tw`flex flex-row justify-between  my-2 px-2 py-3 rounded-md bg-[#d1e981]`}
      >
        <Text style={tw`font-bold text-xl text-[#ff0f63]`}>Name</Text>
        <Text style={tw`font-bold text-xl text-[#ff0f63]`}>Registration Number</Text>
        <Text style={tw`font-bold text-xl text-[#ff0f63]`}>Time</Text>
      </View>
      {props.data.map((item) => (
        <View
          key={item._id}
          style={tw`flex flex-row w-full justify-between my-1 p-2  rounded-md bg-[#d1e981]`}
        >
          <Text style={tw`text-md text-[#ff0f63]`}>{item.name}</Text>
          <Text style={tw`text-md text-[#ff0f63]`}>{item.agno}</Text>
          <Text style={tw`text-md text-[#ff0f63]`}>{item.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Card;

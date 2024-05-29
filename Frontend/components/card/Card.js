import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Card = (props) => {
  return (
    <>
    <View style={tw`mx-4 border-2 border-solid border-[#ff0f63] h-28 mt-8 rounded-xl flex items-center flex-col`}>
      <Text style={tw`font-semibold text-lg shadow-2xl mt-2 text-[#ff0f63] shadow-orange-500`}>{props.time} on {props.day}</Text>
        <Text style={tw`text-[#ff0f63]`}>Your class will be in the {props.classRoom}</Text>
        <Text style={tw`absolute bottom-4 text-[#ff0f63]`}>{props.degree}</Text>
    </View>
    <View><Text style={tw`absolute left-6 text-[#ff0f63]`}>{props.teacher}</Text></View>
    <View style={tw`mb-8`}><Text style={tw`absolute right-6 text-[#ff0f63]`}>{props.course}</Text></View>
    </>
  )
}

export default Card
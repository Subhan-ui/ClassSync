import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Header = () => {
  return (
    <View
        style={tw`absolute flex flex-row items-center justify-between top-0 h-21  w-full bg-[#FF528E]`}
      >
        <View style={tw`ml-5 mt-4 `}>
          <Text style={tw`text-[#d1e981] text-3xl `}>Welcome to ClassSync</Text>
        </View>
      </View>
  )
}

export default Header
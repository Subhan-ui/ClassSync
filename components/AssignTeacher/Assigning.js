import { View, Text, TextInput, TouchableHighlight, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { teacherActions } from "../../store/TeacherSlice";
import useFetch from "../../store/useFetch";

const Assigning = () => {
  // const [state,setState]=useState(useSelector(state=>state.teacher));
  // setState()
  const state = useSelector((state) => state.teacher);
  // console.log(typeof state)
  const dispatch = useDispatch();
  // const fetchedData = useFetch({link:'assign', body: state})
  const handleStates = (a, b) => {
    dispatch(teacherActions.changeState({name:a, value:b}));
  };
  useEffect(()=>{
    (async () => {
      try {
        const response = await fetch('http://192.168.149.102:3000/getAssign');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const res = await response.json();
        dispatch(teacherActions.changeWholeState(res))
        
        global.myGlobalVariable=res
        console.log('Response successfully retrieved and processed.');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  },[])

  const handlePostAssign = async () => {
    try {
      const response = await fetch('http://192.168.149.102:3000/changeAssign', {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      });
  
      if (response.ok) {
        Alert.alert('Successfully Updated dude');
        console.log('mubaraka');
      } else {
        // Additional error handling for non-OK responses
        if (response.status === 404) {
          Alert.alert('Resource not found');
        } else {
          Alert.alert('Failed to update');
        }
        console.log('ghlty pkro');
      }
    } catch (error) {
      // Network errors or other issues
      console.error('Error occurred while updating:', error);
      Alert.alert('Failed to update');
    }
  };
  
  return (
    <View style={tw`mt-10 mx-3 flex gap-12`}>
      <Form value={state.DHL_405}  onChange={handleStates} teacher="DHL_405"  />
      <Form value={state.CS_308}   onChange={handleStates} teacher="CS_308"   />
      <Form value={state.CS_306}   onChange={handleStates} teacher="CS_306"   />
      <Form value={state.CS_406}   onChange={handleStates} teacher="CS_406"   />
      <Form value={state.MATH_305} onChange={handleStates} teacher="MATH_305" />
      <Form value={state.MATH_513} onChange={handleStates} teacher="MATH_513" />
      <Form value={state.IS_401}   onChange={handleStates} teacher="IS_401"   />
      <Form value={state.IS_402}   onChange={handleStates} teacher="IS_402"   />
      <Form value={state.BBA_412}  onChange={handleStates} teacher="BBA_412"  />
      <Form value={state.BBA_510}  onChange={handleStates} teacher="BBA_510"  />
      <Form value={state.SE_408}   onChange={handleStates} teacher="SE_408"   />
      <Form value={state.SE_410}   onChange={handleStates} teacher="SE_410"   />
      <Form value={state.SE_412}   onChange={handleStates} teacher="SE_412"   />
      <Form value={state.SE_502}   onChange={handleStates} teacher="SE_502"   />
      <Form value={state.SE_504}   onChange={handleStates} teacher="SE_504"   />
      <Form value={state.SE_506}   onChange={handleStates} teacher="SE_506"   />
      <Form value={state.SE_510}   onChange={handleStates} teacher="SE_510"   />
      <Form value={state.SE_512}   onChange={handleStates} teacher="SE_512"   />
      <Form value={state.SE_514}   onChange={handleStates} teacher="SE_514"   />
      <Form value={state.STAT_402} onChange={handleStates} teacher="STAT_402"   />
      <View style={tw`flex items-center mb-5`}>
      <TouchableHighlight style={tw`border-2 border-solid border-slate-500 px-10 py-2 rounded-full bg-orange-600  `} onPress={handlePostAssign}>
        <Text style={tw`text-white text-xl`}>Assign</Text>
      </TouchableHighlight>
      </View>
    </View>
  );
};

export default Assigning;

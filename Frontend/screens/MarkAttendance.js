import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import StudentAM from '../components/StudentAttendanceMarking/StudentAM.js';
import { useSelector } from 'react-redux';
import TeacherA from '../components/TeacherAttendance/TeacherA.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MarkAttendance = () => {
  // const data = useSelector(state=>state.login.data)
  const [content,setContent]= useState()
  useEffect(()=>{
    (async()=>{
      const items =await AsyncStorage.getItem("data");
      const some = JSON.parse(items)
      // console.log(JSON.parse(items))
      if( some.whoRU=== 'Teacher'){
        setContent(<TeacherA />)
      } else if(some.whoRU==='Student'){
        setContent(<StudentAM />)
      } else{
        setContent(<TeacherA />)
      }
    })()

  },[])
  return (
    <>
      {content}
    </>
  )
}

export default MarkAttendance
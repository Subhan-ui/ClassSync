import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../components/card/Cards";
import schedule from "../components/constants";
import { useSelector } from "react-redux";
import Assigning from "../components/AssignTeacher/Assigning";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc";
// import Loader from '../assets/Loader.js'
import Header  from "../layout/Header";

const ViewSchedule = () => {
  // const data = schedule;
  const [data, setData] = useState(null);
  // console.log(data)
  // const loginData = useSelector(state=>state.login.data)
  const [loginData, setLoginData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        // Fetch login data
        const storageData = await AsyncStorage.getItem("data");
        setLoginData(JSON.parse(storageData));

        // Fetch schedule data
        const some = await schedule();
        setData(some);
        // console.log(some)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [schedule]);


  


  if (!data) {
    // Render loading or null while data is being fetched
    return (
      <View style={tw`bg-[#edb0c5] h-full`}>
      <ActivityIndicator size={60} color="#ff0f63" style={tw`absolute top-[45%] bottom-[45%] left-[40%] right-[40%] `}/>
      </View>
    );
  }
  return (
    <View style={tw`bg-[#EDB0C5]`}>
      <Header />
      <ScrollView style={tw`mt-21 h-full`}>
        {loginData.whoRU !== "Admin" ? <Cards data={data} /> : <Assigning />}
      </ScrollView>
    </View>
  );
};

export default ViewSchedule;

const styles = StyleSheet.create({});

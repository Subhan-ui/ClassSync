import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc";
import Card from "../AttendanceCard/Card";

const TeacherA = () => {
  const [data1, setData1] = useState({});
  const [data, setData] = useState([]);
  const [got, setGot] = useState(false);
  // const fetchData = useGetFetch(`markGet/${data1.email}`);
  useEffect(() => {
    (async () => {
      const dat = await AsyncStorage.getItem("data");
      // console.log(JSON.parse(dat))
      setData1(JSON.parse(dat));
    })();

    // const res = fetchData();
    // if(res.ok){
    // }
    // setData(res)
    // console.log(typeof(data))
  }, []);
  const handleGet = async () => {
    try {
      console.log(data1.email);
      const res = await fetch(
        `http://192.168.149.102:3000/markGet/${data1.email}`
      );
      const response = await res.json();

      console.log("good job");
      setData(response);
      setGot(true);

      // console.log('bad job');
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(data);
  return (
    <View style={tw`bg-[#EDB0C5] h-full w-full`}>
    <View style={tw`absolute top-15 w-full`}>
      {/* <View>{data.map((n)=>(<View><Text>{n.agno}</Text></View>))}</View> */}
      {!got ? (
        <Pressable
          style={tw` py-3 px-10 rounded-full bg-[#ff528e] w-[80%]  mx-[10%]`}
          onPress={handleGet}
        >
          <Text style={tw`text-center text-white`}>Get</Text>
        </Pressable>
      ) : (
        <View>
          <Card data={data} />
        </View>
      )}
    </View>
    </View>
  );
};

export default TeacherA;

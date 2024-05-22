import { View, Text } from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Drop_down";

const Cards = (props) => {
  const [originalItems]=useState(props.data)
  const [items,setItems]=useState(props.data)
  const filterByClass = (teacherName)=>{
    const item = originalItems.filter(some=>some.teacher === teacherName)
    setItems(item)
  }
  const filterByDegree = (degreeName)=>{
    const item = originalItems.filter(some=>some.degree === degreeName)
    setItems(item)
  }
  const setAll = ()=>{
    setItems(originalItems)
  }
  return (
    <>
    <View>
        <Dropdown setAll={setAll} filtered={filterByClass} items={items} originalItems={originalItems}/>
        <Dropdown2 setAll={setAll} filtered={filterByDegree} items={items} originalItems={originalItems}/>
    </View>
      {items.map((dat) => (
        <Card
          key={dat.id}
          time={dat.time}
          day={dat.day}
          classRoom={dat.classRoom}
          degree={dat.degree}
          teacher={dat.teacher}
          course={dat.course}
        />
      ))}
    </>
  );
};

export default Cards;

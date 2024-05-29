import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarkAttendance from "../screens/MarkAttendance";
import HomeScreen from "../screens/HomeScreen";
import ViewSchedule from "../screens/ViewSchedule";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Asking from "../screens/Asking";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TabsNavigator = () => {
  const [data, setdata] = useState({});
  useEffect(() => {
    (async () => {
      const items = await AsyncStorage.getItem("data");
      setdata(JSON.parse(items));
    })();
  }, []);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#FF528E'},
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#d1e981", fontSize: 12 },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#d1e981" />
            ) : (
              <AntDesign name="home" size={24} color="#d1e981" />
            ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ViewSchedule}
        options={{
          tabBarLabel: "Schedule",
          tabBarLabelStyle: { color: "#d1e981", fontSize: 12},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="time" size={24} color="#d1e981" />
            ) : (
              <Ionicons name="time-outline" size={24} color="#d1e981" />
            ),
        }}
      />
      {data.whoRU !== "Admin" && (
        <Tab.Screen
          name="Mark"
          component={MarkAttendance}
          options={{
            tabBarLabel: "Mark",
            tabBarLabelStyle: { color: "#d1e981", fontSize: 12},
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="bookmarks" size={24} color="#d1e981" />
              ) : (
                <Ionicons name="bookmarks-outline" size={24} color="#d1e981" />
              ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Asking"
          component={Asking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

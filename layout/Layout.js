import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

import tw from "twrnc";
import Navigator, { TabsNavigator } from "./Navigator";
import LoginScreen from "../screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import ReactProvider from "../store/ReactProvider";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginActions } from "../store/loginSlice";
import { NavigationContainer } from "@react-navigation/native";

const layout = () => {
  const data = useSelector((state) => state.login.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const some = async () => {
      const storageData = await AsyncStorage.getItem("data");
      // console.log(storageData);
      if (storageData) {
        dispatch(loginActions.loggedIn());
      } else {
        dispatch(loginActions.loggedOut());
      }
    };
    some();
  }, []);
  return (
    <>
      {data.isLoggedIn ? (
        <NavigationContainer>
          <TabsNavigator />
        </NavigationContainer>
      ) : (
        <Navigator />
      )}
      {/* <LoginScreen /> */}
    </>
  );
};

export default layout;

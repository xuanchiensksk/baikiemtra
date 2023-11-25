import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Login from "../screens/login";
import  Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet , Text} from "react-native";
import Cate from "../screens/Cate";
import Bag from "../screens/Bag";




const BottomBar = () => {
    const Tab = createBottomTabNavigator();
      return (
        <Tab.Navigator >
          <Tab.Screen
            name="Bắt Đầu"
            component={Home}
            options={({ route, navigation }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'black',
              },
              tabBarIconStyle: {
                display: 'none',
              },
              tabBarLabelPosition: 'beside-icon',
              tabBarLabel: ({ focused }) => (
                <Text style=
                {{ 
                  color: focused ? 'white' : 'gray',
                  textDecorationLine: focused ? "underline" : "none",
                }}>
                  Bắt Đầu
                </Text>
              ),
            })}
          />
          <Tab.Screen
            name="Danh Mục"
            component={Cate}
            options={({ route, navigation }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'black',
              },
              tabBarIconStyle: {
                display: 'none',
              },
              tabBarLabelPosition: 'beside-icon',
              tabBarLabel: ({ focused }) => (
                <Text style=
                {{ 
                  color: focused ? 'white' : 'gray',
                  textDecorationLine: focused ? "underline" : "none",
                }}>
                  Cate
                </Text>
              ),
            })}
          />
          <Tab.Screen
            name="Tài Khoản"
            component={Login}
            options={({ route, navigation }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'black',
              },
              tabBarIconStyle: {
                display: 'none',
              },
              tabBarLabelPosition: 'beside-icon',
              tabBarLabel: ({ focused }) => (
                <Text style=
                {{ 
                  color: focused ? 'white' : 'gray',
                  textDecorationLine: focused ? "underline" : "none",
                }}>
                  Tài Khoản
                </Text>
              ),
            })}
          />
          <Tab.Screen
            name="Giỏ"
            component={Bag}
            options={({ route, navigation }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: 'black',
              },
              tabBarIconStyle: {
                display: 'none',
              },
              tabBarLabelPosition: 'beside-icon',
              tabBarLabel: ({ focused }) => (
                <Text style=
                {{ 
                  color: focused ? 'white' : 'gray',
                  textDecorationLine: focused ? "underline" : "none",
                }}>
                  Giỏ
                </Text>
              ),
            })}
          />
          
        </Tab.Navigator>
        );
};
const styles = StyleSheet.create({
    TabBarstyle:{
        backgroundColor:'black',
    }

});
export default BottomBar;

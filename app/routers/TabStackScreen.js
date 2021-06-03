import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screen/HomeScreen";
import AboutScreen from "../screen/AboutScreen";


const TabStack = createBottomTabNavigator()

const TabStackScreen = () => {
    return(
        <TabStack.Navigator>
            <TabStack.Screen name="home" component={HomeScreen}/>
            <TabStack.Screen name="about" component={AboutScreen}/>
        </TabStack.Navigator>
    );
};

export default TabStackScreen;
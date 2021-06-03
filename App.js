import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import TabStackScreen from './app/routers/TabStackScreen';
import AboutScreen from './app/screen/AboutScreen';
import HomeScreen from "./app/screen/HomeScreen";

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <TabStackScreen/>
        </SafeAreaView>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

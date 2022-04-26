import React from "react"
import {View,Pressable, Text, StyleSheet } from "react-native"
import TabInterFace from "./TabInterFace";
const Tab:React.FC<TabInterFace> = ({removeTodo, index, item}) => {
    return (
        <View style={styles.todoContainer}>
            <Pressable
              style={styles.pressable}
              android_ripple={{color: "white"}}
              onPress={removeTodo.bind(null,index)}
            >
              <Text>{item}</Text>
            </Pressable>
          </View>
    )
}

export default Tab;

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
    elevation: 4,
    margin: 10,
    borderRadius: 5
  },
  pressable: {
    flex: 1,
    padding: 10,
    borderRadius: 5
  }
})
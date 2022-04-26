import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, ScrollView } from 'react-native';
import Modal from './components/Modal';
import Tab from "./components/Tab";

export default function App() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<any[]>([]);
  const [visible, setVisible] = useState<boolean>(true); 
  const addTodo = () => {
    setTodo(todo => [input,...todo]);
    setVisible(false);
  }
  const removeTodo = (index: string | number) => {
    setTodo(todo => todo.filter((_, i) => i !== index ))
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Button title="Add Todo" onPress={() => setVisible(true)}/>
      <Modal visible={visible} setInput={setInput} input={input} addTodo={addTodo} setVisible={setVisible} />
      <ScrollView style={styles.scrollView}>
        {todo?.map((item, index) => (
          <Tab removeTodo={removeTodo} index={index} item={item} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 10
  },
  scrollView: {
    flex: 1
  }
});

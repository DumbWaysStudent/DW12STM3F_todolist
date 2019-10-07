import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 1, todo: 'reading'},
    {id: 2, todo: 'swim'},
    {id: 3, todo: 'coding'},
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input === '') return;
    setTodo(prev => [
      ...prev,
      {id: todo.length + 1, todo: input, isDone: false, edit: false},
    ]);
    setInput('');
  };

  return (
    <View>
      <View style={Style.form}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="Input Todo Task!"
          style={Style.inputText}
        />
        <Button style={Style.btnSubmit} success onPress={() => addTodo()}>
          <Text style={{color: 'white', fontSize: 20}}>Add</Text>
        </Button>
      </View>
      <View>
        {todo.map(item => (
          <Text style={Style.textTodo} key={item.id}>
            {item.todo}
          </Text>
        ))}
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  textTodo: {
    fontSize: 20,
    borderBottomWidth: 2,
    padding: 5,
  },
  inputText: {
    padding: 10,
    borderWidth: 2,
    width: '70%',
  },
  btnSubmit: {
    width: '20%',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
export default App;

import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 1, todo: 'reading'},
    {id: 2, todo: 'swim'},
    {id: 3, todo: 'coding'},
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodo(prev => [...prev, {id: todo.length + 1, todo: input}]);
    setInput('');
  };

  const deleteTodo = id => {
    setTodo(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View>
      <View style={Style.form}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="Input Todo Task!"
          style={Style.inputText}
          returnKeyType="next"
        />
        <Button style={Style.btnSubmit} success onPress={() => addTodo()}>
          <Text style={{color: 'white', fontSize: 20}}>ADD</Text>
        </Button>
      </View>
      <View>
        {todo.map(item => (
          <View key={item.id} style={Style.renderData}>
            <Text style={Style.textTodo}>{item.todo}</Text>
            <View style={[Style.textTodo, Style.textIcon]}>
              <Icon
                name="trash"
                style={{color: 'red'}}
                onPress={() => deleteTodo(item.id)}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  textTodo: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 2,
    width: '80%',
  },
  textIcon: {
    width: '20%',
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputText: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    width: '70%',
  },
  renderData: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  btnSubmit: {
    width: '20%',
    justifyContent: 'center',
    borderRadius: 8.6,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default App;

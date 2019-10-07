import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Button, Icon, CheckBox} from 'native-base';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 1, todo: 'reading', isDone: false},
    {id: 2, todo: 'swim', isDone: false},
    {id: 3, todo: 'coding', isDone: false},
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodo(prev => [
      ...prev,
      {id: todo.length + 1, todo: input, isDone: false},
    ]);
    setInput('');
  };

  const deleteTodo = id => {
    setTodo(prev => prev.filter(item => item.id !== id));
  };

  const handleTodoDone = state => {
    const exist = todo.find(item => state.id === item.id);
    if (exist) {
      exist.isDone = !exist.isDone;
      setTodo(prev => [...prev]);
    }
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
            <CheckBox
              style={Style.textCheckBox}
              color="green"
              checked={item.isDone}
              onPress={() => handleTodoDone(item)}
            />
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
  textCheckBox: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 5,
  },
  textTodo: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 2,
    width: '65%',
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

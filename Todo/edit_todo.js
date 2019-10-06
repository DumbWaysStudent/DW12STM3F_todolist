import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Button, Icon, CheckBox} from 'native-base';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 0, todo: 'reading', isDone: false, edit: false},
    {id: 1, todo: 'swim', isDone: false, edit: false},
    {id: 2, todo: 'coding', isDone: false, edit: false},
  ]);

  const [input, setInput] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [idData, setIdData] = useState(0);

  const addTodo = () => {
    if (input === '') return;
    setTodo(prev => [
      ...prev,
      {id: todo.length + 1, todo: input, isDone: false, edit: false},
    ]);
    setInput('');
  };

  const deleteTodo = id => {
    if (isEdit) {
      alert('Tidak Bisa!');
      return;
    }
    setTodo(prev => prev.filter(item => item.id !== id));
  };

  const handleTodoDone = state => {
    const exist = todo.find(item => state.id === item.id);
    if (exist) {
      exist.isDone = !exist.isDone;
      setTodo(prev => [...prev]);
    }
  };

  const editTodo = state => {
    for (let i in todo) {
      if (todo[i].edit !== state.edit) {
        alert('Tidak Bisa!');
        return (state.edit = false);
      }
    }

    const exist = todo.find(item => state.id === item.id);
    const sameId = todo.indexOf(state);
    setInput(todo[sameId].todo);
    setIdData(state.id);
    setIsEdit(true);
    if (exist) {
      exist.edit = !exist.edit;
      setTodo(prev => [...prev]);
    }
  };

  const cancelOnEdit = state => {
    setIsEdit(false);
    setInput('');
    const exist = todo.find(item => state.id === item.id);
    if (exist) {
      exist.edit = !exist.edit;
    }
  };

  const editTodoTask = id => {
    if (input === '') return;
    let objIdx = todo.findIndex(obj => obj.id == id);
    todo[objIdx].todo = input;
    todo[objIdx].edit = false;
    setInput('');
    setIsEdit(false);
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
          autoFocus
        />

        {isEdit === false ? (
          <Button style={Style.btnSubmit} success onPress={() => addTodo()}>
            <Text style={{color: 'white', fontSize: 20}}>ADD</Text>
          </Button>
        ) : (
          <Button
            style={Style.btnSubmit}
            warning
            onPress={() => editTodoTask(idData)}>
            <Text style={{color: 'white', fontSize: 20}}>Edit</Text>
          </Button>
        )}
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
            <Text
              style={[
                Style.textTodo,
                item.isDone
                  ? {
                      textDecorationLine: 'line-through',
                      backgroundColor: 'orange',
                      color: 'white',
                    }
                  : '',
              ]}>
              {item.todo}
            </Text>
            <View style={[Style.textTodo, Style.textIcon]}>
              {item.edit === false ? (
                <Icon
                  name="create"
                  style={{color: 'green'}}
                  onPress={() => editTodo(item)}
                />
              ) : (
                <Icon
                  name="close"
                  style={{color: 'red'}}
                  onPress={() => cancelOnEdit(item)}
                />
              )}
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

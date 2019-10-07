import React, {useState} from 'react';
import {View, Text} from 'react-native';
const App = () => {
  const [todo, setTodo] = useState([
    {id: 0, todo: 'reading'},
    {id: 1, todo: 'swim'},
    {id: 2, todo: 'coding'},
  ]);

  return (
    <View>
      {todo.map(item => (
        <Text key={item.id} style={{borderBottomWidth: 2, fontSize: 20}}>
          {item.todo}
        </Text>
      ))}
    </View>
  );
};

export default App;

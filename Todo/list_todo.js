import React from 'react';
import {View, Text} from 'react-native';
const App = () => {
  const data = ['work', 'swim', 'study', 'code', 'run'];

  return (
    <View>
      {data.map(item => (
        <Text style={{borderBottomWidth: 2, fontSize: 20}}>{item}</Text>
      ))}
    </View>
  );
};

export default App;

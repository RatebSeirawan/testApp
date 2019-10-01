import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextTag} from '../molecules';

export default ({data}) => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <View style={styles.container}>
      {data.map(item => (
        <TextTag state={selected} setState={() => setSelected(item)}>
          {item}
        </TextTag>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

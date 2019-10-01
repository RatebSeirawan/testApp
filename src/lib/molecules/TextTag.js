import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {RegularText} from '../atoms';
import Colors from '../../styles';

export default ({state, setState, children}) => {
  const active = state === children;

  return (
    <TouchableOpacity style={styles.container(active)} onPress={setState}>
      <RegularText {...styles.text(active)}>{children}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: active => ({
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    backgroundColor: active ? Colors.lightBlue : null,
  }),
  text: active => ({
    size: 15,
    height: 38,
    color: active ? '#fff' : 'rgb(136,141,166)',
  }),
});

import React, {useState} from 'react';
import {View} from 'react-native';
import {CalendarNumber} from '../atoms';

export default () => {
  const [selectedDay, setSelectedDay] = useState('9');

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 10,
        marginVertical: 12,
      }}>
      {['9', '10', '11', '12', '13', '14', '15'].map(day => (
        <CalendarNumber
          state={selectedDay}
          setState={() => setSelectedDay(day)}>
          {day}
        </CalendarNumber>
      ))}
    </View>
  );
};

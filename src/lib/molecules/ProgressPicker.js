import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
// eslint-disable-next-line react-native/no-inline-styles
import {MediumText} from '../atoms';
import {elevationShadow} from '../utils';
import Colors from '../../styles';

const inActiveColor = 'rgb(205,211,220)';
const inActiveBackgrounnd = 'rgb(242,244,246)';

export default () => {
  const [isDaily, setIsDaily] = useState(true);

  return (
    <View style={container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          borderRightColor: inActiveColor,
          borderRightWidth: 0.5,
          backgroundColor: isDaily ? '#fff' : inActiveBackgrounnd,
          ...style,
        }}
        onPress={() => setIsDaily(true)}>
        <MediumText
          color={isDaily ? Colors.lightBlue : inActiveColor}
          size={16}
          height={30}>
          {`Daily Progress`}
        </MediumText>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          borderLeftColor: inActiveColor,
          borderLeftWidth: 0.5,
          backgroundColor: !isDaily ? '#fff' : inActiveBackgrounnd,
          ...style,
        }}
        onPress={() => setIsDaily(false)}>
        <MediumText
          color={!isDaily ? Colors.lightBlue : inActiveColor}
          size={16}
          height={30}>
          {`Entire Progress`}
        </MediumText>
      </TouchableOpacity>
    </View>
  );
};

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 12,
};

const container = {
  flexDirection: 'row',
  marginTop: 32,
  marginHorizontal: 12,
  borderRadius: 13,
  ...elevationShadow(4),
};

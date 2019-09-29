import React from 'react';
import RegularText from './RegularText';

export default ({children}) => {
  return (
    <RegularText color={'rgb(152,157,179)'} size={16} height={22}>
      {children}
    </RegularText>
  );
};

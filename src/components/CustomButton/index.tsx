import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './styles';

type CustomButtonProps = {
  onPress: any;
  text: string;
  type?: string;
  bgColor?: string;
  fgColor?: string;
}

export function CustomButton({ onPress, text, type = 'PRIMARY', bgColor, fgColor }: CustomButtonProps){
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}
      onPress={onPress}
      >
      <Text style={[
        styles.text,
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
      ]}>
        {text}
      </Text>
    </Pressable>
  );
}
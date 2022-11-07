import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

type InputProps = {
  value: string;
  setValue: React.Dispatch<string>;
  placeholder: string;
  secureTextEntry?: boolean;
}

export function CustomInput({ value, setValue, placeholder, secureTextEntry }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );

}
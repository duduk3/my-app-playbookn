import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';

export function ForgotPassword(){
  const [username, setUsername] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  function handleSubmit() {
    navigation.navigate('signin');
  }

  function handleGoBack() {
    navigation.navigate('newPassword');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <Text style={styles.text}>Reset your password</Text>

        <CustomInput
          placeholder='Username'
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder='Code'
          value={code}
          setValue={setCode}
          secureTextEntry
        />
        <CustomInput
          placeholder='Enter your new pasword'
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton
          text='Submit'
          onPress={handleSubmit}
          type='PRIMARY'
        />
        <CustomButton
          text="Back to Resend Code"
          onPress={handleGoBack}
          type='TERTIARY'
        />

      </View>
    </ScrollView>
  );
}
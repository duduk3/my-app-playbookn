import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';

export function NewPassword(){
  const [username, setUsername] = useState('')
  const navigation = useNavigation()

  function handleSend() {
    navigation.navigate('forgotPassword');
  }

  function handleGoBack() {
    navigation.navigate('signin');
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

        <CustomButton
          text='Send'
          onPress={handleSend}
          type='PRIMARY'
        />
        <CustomButton
          text="Back to Sign In"
          onPress={handleGoBack}
          type='TERTIARY'
        />

      </View>
    </ScrollView>
  );
}
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';

export function ConfirmEmail(){
  const [code, setCode] = useState('')
  const navigation = useNavigation()

  function handleConfirm() {
    navigation.navigate('signin');
  }

  function handleResendCode() {
    // navigation.navigate('home');
    console.warn('need to implement');
    
  }

  function handleGoBack() {
    navigation.navigate('signin');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <Text style={styles.text}>Confirm your email</Text>

        <CustomInput
          placeholder='Enter your confirmation code'
          value={code}
          setValue={setCode}
        />

        <CustomButton
          text='Confirm'
          onPress={handleConfirm}
          type='PRIMARY'
        />
        <CustomButton
          text='Resend code'
          onPress={handleResendCode}
          type='SECONDARY'
          bgColor='#FFF'
          fgColor='#3b71f3'
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
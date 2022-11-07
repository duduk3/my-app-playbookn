import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';

export function SignUp(){
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigation = useNavigation()

  // TERMS_OF_USE = 'https://www.google.com/'
  // PRIVACY_POLICY = 'https://www.google.com/'

  function handleRegister() {
    navigation.navigate('confirmEmail');
  }

  function handleFacebook() {
    navigation.navigate('home');
  }

  function handleGoogle() {
    navigation.navigate('home');
  }

  function handleApple() {
    navigation.navigate('home');
  }

  function handleGoBack() {
    navigation.navigate('signin');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>
 
        <CustomInput
          placeholder='Name'
          value={name}
          setValue={setName}
        />
        <CustomInput
          placeholder='Username'
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder='Email'
          value={email}
          setValue={setEmail}
          secureTextEntry
        />
        <CustomInput
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder='Confirm Password'
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />

        <CustomButton
          text='Register'
          onPress={handleRegister}
          type='PRIMARY'
        />

        <Text style={{color: 'gray', paddingBottom: 10}}>
          {'By registering, you confirm that you accept our '}
          <Text
            style={{color: 'red'}}
            onPress={() => Linking.openURL('https://www.google.com/')}
          >
               Terms of Use 
          </Text>
          {' and '}
          <Text
            style={{color: 'red'}}
            onPress={() => Linking.openURL('https://www.google.com/')}
          >
              Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text='Sign In with Facebook'
          onPress={handleFacebook}
          bgColor='#e7eaf4'
          fgColor='#4765a9'
        />
        <CustomButton
          text='Sign In with Google'
          onPress={handleGoogle}
          bgColor='#fae9ea'
          fgColor='#dd4d44'
        />
        <CustomButton
          text='Sign In with Apple'              
          onPress={handleApple}
          bgColor='#e3e3e3'
          fgColor='#363636'
        />
        <CustomButton
          text="Have an account? Sign In"
          onPress={handleGoBack}
          type='TERTIARY'
        />
      </View>
    </ScrollView>
  );
}
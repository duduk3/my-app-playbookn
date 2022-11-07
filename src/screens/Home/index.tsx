import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { styles } from './styles';

export function Home(){
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('signin');
  }

  return (
    <View>
      <Image
        source={require('../../../assets/images/play-tennis.png')}
        style={styles.logo}
        resizeMode='contain'
      />
      <CustomButton
        text="Back to Sign In"
        onPress={handleGoBack}
        type='TERTIARY'
      />

    </View>
  );
}
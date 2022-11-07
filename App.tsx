import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes';

import { Amplify } from 'aws-amplify';


import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);


function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Routes/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D4DAA4',
    paddingVertical: 20,
  },
});

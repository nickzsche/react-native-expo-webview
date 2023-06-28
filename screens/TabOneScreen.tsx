import React, { useState, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import WebView from 'react-native-webview'

const TabOneSecreen = () => {


  const runFirst = `
  document.getElementsByClassName('navbar_right')[0].style.display = 'none';
  true; // note: this is required, or you'll sometimes get silent failures
`;
const runTwo = `
  document.getElementsByClassName('navbarpages navbarpagesbg')[0].style.display = 'none';
  true; // note: this is required, or you'll sometimes get silent failures
`;




  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{ uri: 'https://app.kamusaglik.net' }}
          startInLoadingState={true}
          injectedJavaScript={runFirst+runTwo}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={styles.flexContainer}
              
            />
          )}
          
        />
        
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  button: {
    color: 'white',
    fontSize: 12,
  }
})

export default TabOneSecreen
import * as React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const runFirst = `
      document.getElementsByClassName('menu-btn')[0].style.display = 'none';
      
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    const runTwo = `
    document.getElementsByClassName('mask-lnk')[0].style.display = 'none';
    
    
  `;
  return (
    <WebView 
    style={styles.container}
    source={{ uri: 'https://sahanhasret.com.tr/resume-creative-elementor/' }}
    injectedJavaScript={runTwo+runFirst}
    
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

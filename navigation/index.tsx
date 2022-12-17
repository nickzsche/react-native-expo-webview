/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabFiveScreen from '../screens/TabFive';
import TabFourScreen from '../screens/TabFourScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
    
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
    
      initialRouteName="TabOne"
      screenOptions={{
       
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: 'transparent'
        }
        
       
      }}>
        {/* //Buradan Başla */}
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Ana Sayfa',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"white",
          },
          
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={"white"}  />,
        })}
      /> 
      {/* //Buraya dek sil veya kopyala */}
      <BottomTab.Screen
      
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Sepetim',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"white",
          },
          tabBarIcon: ({ color }) => <MaterialIcons name="shopping-basket" size={24} color={"white"}  />,
        }}
      />
      <BottomTab.Screen
       name="TabThree"
       component={TabThreeScreen}
       options={{
         title: 'Giriş Yap/Kaydol',
         //headerShown: false, Header gizlemek için kullanılır
         headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"white",
          },
         tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color="white" />
       }}
      />

<BottomTab.Screen
       name="TabFour"
       component={TabFourScreen}
       options={{
         title: 'İletişim',
         headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"white",
          },
         tabBarIcon: ({ color }) => <MaterialIcons name="add-ic-call" size={24} color={"white"}  />,
       }}
      />

<BottomTab.Screen
       name="TabFive"
       component={TabFiveScreen}
       options={{
         title: 'Hakkımda',
         headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"white",
          },
         tabBarIcon: ({ color }) => <MaterialIcons name="folder-shared" size={24} color={"white"}  />,
       }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

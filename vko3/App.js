import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import AppBar from './components/AppBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{header: (props) => <AppBar {...props} />, }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
          <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'Second' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

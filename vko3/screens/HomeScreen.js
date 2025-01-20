import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to second screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
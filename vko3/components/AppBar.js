import React from 'react';
import { Appbar } from 'react-native-paper';

function AppBar({ navigation, back, options, route }) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        route.name === 'Home' && (
          <Appbar.Action
            icon="arrow-right"
            onPress={() => navigation.navigate('Second')}/>
        )
      )}
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
}

export default AppBar;
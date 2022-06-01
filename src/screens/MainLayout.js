import React from 'react';
import { View, Text } from 'react-native';

export function MainLayout() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Main layout</Text>
    </View>
  );
}

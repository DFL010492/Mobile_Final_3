import React from 'react';
import { View, Text } from 'react-native';
import BottomMenu from '../components/BottomMenu';

export default function Entrada() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo</Text>
      <BottomMenu />
    </View>
  );
}

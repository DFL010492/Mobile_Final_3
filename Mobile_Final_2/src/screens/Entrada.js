import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../components/Menu'; // <-- IMPORTA o Menu
import styles from './style/EntradaStyle'; // caso tenha um style separado
import BottomMenu from '../components/BottomMenu';

export default function Entrada({ navigation }) {
  return (
    <View style={styles.container}>
      <Menu navigation={navigation} /> {/* <-- ADICIONA o Menu */}
      <Text>Bem-vindo à tela de entrada!</Text>
      <BottomMenu />
    </View>
  );
}

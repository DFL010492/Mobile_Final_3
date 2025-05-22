import React from 'react';
import { View, Text, Animated, Image } from 'react-native';
import Menu from '../components/Menu'; // <-- IMPORTA o Menu
import styles from './style/EntradaStyle'; // caso tenha um style separado
import BottomMenu from '../components/BottomMenu';

export default function Entrada({ navigation }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />
      <Animated.View
        style={[styles.logoContainer, { opacity: fadeAnim }]}
      >
        <Image
          source={require('../../assets/image/jl2.png')}
          style={styles.logo}
          onLoad={fadeIn}
          resizeMode="contain"
        />
        </Animated.View>
      <BottomMenu />
    </View>
  );
}

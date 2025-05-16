// src/components/BottomMenu.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BatDataBase')}>
        <Image
          source={require('../../assets/image/bat-logo.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BatDataBase')}>
        <Image
          source={require('../../assets/image/superman-sb.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    tintColor: 'yellow',
  },
});

export default BottomMenu;

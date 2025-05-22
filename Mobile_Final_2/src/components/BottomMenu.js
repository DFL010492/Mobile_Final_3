import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Botão do Batman */}
        <TouchableOpacity
          style={styles.batContainer}
          onPress={() => navigation.navigate('BatDataBase')}
        >
          <Image
            source={require('../../assets/image/bat-logo.png')}
            style={styles.bat}
          />
        </TouchableOpacity>

        {/* Botão do Superman */}
        <TouchableOpacity
          style={styles.superContainer}
          onPress={() => navigation.navigate('BatDataBase')}
        >
          <Image
            source={require('../../assets/image/superman-sb.png')}
            style={styles.super}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    height: 100,
  },
  batContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  superContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bat: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    tintColor: 'yellow',
  },
  super: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    tintColor: 'red',
  },
});

export default BottomMenu;

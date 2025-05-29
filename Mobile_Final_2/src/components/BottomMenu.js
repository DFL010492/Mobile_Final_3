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
    backgroundColor: '#0a0a12',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    shadowColor: '#0078f0',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
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
    borderRightWidth: 1,
    borderColor: '#1a1a1a',
  },
  superContainer: {
    flex: 1,
    backgroundColor: '#001a66',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bat: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    tintColor: 'yellow',
  },
  super: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    tintColor: 'red',
  },
});

export default BottomMenu;
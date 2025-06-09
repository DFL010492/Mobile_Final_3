// Login.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style/LoginStyle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://1199-131-72-222-133.ngrok-free.app/api/auth/login', {
        email,
        password: senha,
      });

      const data = response.data;
      console.log('Usuário logado:', data.email);

      await AsyncStorage.setItem('uid', data.uid);
      const uid = await AsyncStorage.getItem('uid');
      console.log('UID armazenado:', uid);

      navigation.navigate('Entrada');
    } catch (error) {
      if (error.response) {
        console.error('Erro no login:', error.response.data);
        Alert.alert('Erro ao logar', error.response.data.error || 'Email ou senha incorretos');
      } else {
        console.error('Erro ao conectar com o servidor:', error);
        Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor.');
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#0a0a12' }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image
            source={require('../../assets/image/HeroLogin.png')}
            style={styles.dcLogo}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              onChangeText={setSenha}
              value={senha}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>ACCESS JUSTICE LEAGUE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.buttonText}>BECOME A HERO</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style/LoginStyle';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://5f92-131-72-222-133.ngrok-free.app/api/auth/login', {
        email,
        password: senha,
      });
  
      // Se chegou aqui, é porque o status está entre 200–299
      const data = response.data;
  
      console.log('Usuário logado:', data.email);
      navigation.replace('BatDataBase');
      
    } catch (error) {
      if (error.response) {
        // Erro de resposta do servidor (ex: 400, 401)
        console.error('Erro no login:', error.response.data);
        Alert.alert('Erro ao logar', error.response.data.error || 'Email ou senha incorretos');
      } else {
        // Erro de rede ou outro erro inesperado
        console.error('Erro ao conectar com o servidor:', error);
        Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style/CadastroStyle';
import axios from 'axios';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    if (!email || !senha) {
      // Verifica se todos os campos estão preenchidos) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('https://5f92-131-72-222-133.ngrok-free.app/api/auth/register', {
        email,
        password: senha,
      });
        
      const data = response.data;
      console.log(response,'Cadastro feito com sucesso, redirecionando...');
      navigation.navigate('Entrada'); // Redireciona para a tela de entrada

    } catch (error) {
      if (error.response) {
        console.error('Erro ao cadastrar:', error.response.data);
        Alert.alert('Erro no cadastro', error.response.data.error || 'Erro ao criar a conta.');
      } else {
        console.error('Erro de conexão:', error);
        Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

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
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

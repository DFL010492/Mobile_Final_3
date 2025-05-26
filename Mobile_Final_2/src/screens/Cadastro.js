import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style/CadastroStyle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [heroi, setHeroi] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!email || !senha) {
      // Verifica se todos os campos estão preenchidos) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('https://fe16-131-72-222-133.ngrok-free.app/api/auth/register', {
        nome,
        heroi,
        email,
        nascimento,
        password: senha,
      });
        
      const data = response.data;
      console.log(response,'Cadastro feito com sucesso, redirecionando...');
      
      await AsyncStorage.setItem('uid', data.uid);
      const uid = await AsyncStorage.getItem('uid');
      console.log('UID armazenado:', uid);

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
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome de Herói"
        value={heroi}
        onChangeText={setHeroi}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={nascimento}
        onChangeText={setNascimento}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

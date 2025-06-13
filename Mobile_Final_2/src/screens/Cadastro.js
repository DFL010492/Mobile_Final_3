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
} from 'react-native';
import styles from './style/CadastroStyle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [heroi, setHeroi] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirm = (date) => {
    setNascimento(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
  };

  const handleCadastro = async () => {
    if (!nome || !heroi || !email || !nascimento || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('https://b581-131-72-222-133.ngrok-free.app/api/auth/register', {
        nome,
        heroi,
        email,
        nascimento,
        password: senha,
      });

      const data = response.data;
      console.log('Cadastro feito com sucesso:', data);

      await AsyncStorage.setItem('uid', data.uid);
      const uid = await AsyncStorage.getItem('uid');
      console.log('UID armazenado:', uid);

      navigation.navigate('Entrada');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#ffffff"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Nome de Herói"
            placeholderTextColor="#ffffff"
            value={heroi}
            onChangeText={setHeroi}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ffffff"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* Data de Nascimento com Date Picker */}
          <TouchableOpacity onPress={showDatePicker} style={styles.input}>
            <Text style={{ color: nascimento ? 'black' : '#ffffff' }}>
              {nascimento || 'Data de Nascimento'}
            </Text>
          </TouchableOpacity>
          
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date()}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#ffffff"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#ffffff"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

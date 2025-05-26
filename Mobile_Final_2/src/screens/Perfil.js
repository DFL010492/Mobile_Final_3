import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Perfil() {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarPerfil = async () => {
      try {
        const uid = await AsyncStorage.getItem('uid');
        if (!uid) {
          console.warn('UID não encontrado no AsyncStorage');
          return;
        }

        const response = await axios.get(`https://fe16-131-72-222-133.ngrok-free.app/api/auth/perfil/${uid}`);
        setPerfil(response.data);
      } catch (error) {
        console.error('Erro ao buscar perfil:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    buscarPerfil();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (!perfil) {
    return <Text>Não foi possível carregar o perfil.</Text>;
  }

  return (
    <View>
      <Text>Bem-vindo, {perfil.nome}!</Text>
      <Text>Nome de herói: {perfil.heroi}</Text>
      <Text>Email: {perfil.email}</Text>
      <Text>Nascimento: {perfil.nascimento}</Text>
    </View>
  );
}

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
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

        const response = await axios.get(`https://409c-131-72-222-133.ngrok-free.app/api/auth/perfil/${uid}`);
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
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.text}>Nome: {perfil.nome}</Text>
      <Text style={styles.text}>Herói: {perfil.heroi}</Text>
      <Text style={styles.text}>Email: {perfil.email}</Text>
      <Text style={styles.text}>Nascimento: {perfil.nascimento}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 }
});
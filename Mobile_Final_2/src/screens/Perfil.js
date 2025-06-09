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

        const response = await axios.get(`https://1199-131-72-222-133.ngrok-free.app/api/auth/perfil/${uid}`);
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
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0078f0" />
      </View>
    );
  }

  if (!perfil) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Não foi possível carregar o perfil.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{perfil.nome}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Herói:</Text>
        <Text style={styles.value}>{perfil.heroi}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{perfil.email}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nascimento:</Text>
        <Text style={styles.value}>{perfil.nascimento}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#0a0a12' 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 1,
  },
  infoBox: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#0078f0',
  },
  label: {
    color: '#0078f0',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  value: {
    color: '#ffffff',
    fontSize: 18,
  },
  errorText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
});

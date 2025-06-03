import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Config() {
  const [notificacoesAtivas, setNotificacoesAtivas] = React.useState(true);
  const [temaEscuro, setTemaEscuro] = React.useState(true);

  const toggleNotificacoes = () => setNotificacoesAtivas(!notificacoesAtivas);
  const toggleTema = () => setTemaEscuro(!temaEscuro);

  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja realmente sair da conta?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', onPress: () => console.log('Usuário saiu') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notificações</Text>
        <Switch
          value={notificacoesAtivas}
          onValueChange={toggleNotificacoes}
          thumbColor={notificacoesAtivas ? '#0078f0' : '#888'}
          trackColor={{ false: '#444', true: '#0078f0' }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Tema Escuro</Text>
        <Switch
          value={temaEscuro}
          onValueChange={toggleTema}
          thumbColor={temaEscuro ? '#0078f0' : '#888'}
          trackColor={{ false: '#444', true: '#0078f0' }}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacidade e Segurança</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sobre o App</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a12',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#0078f0',
  },
  settingLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0078f0',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    elevation: 4,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1,
  },
});

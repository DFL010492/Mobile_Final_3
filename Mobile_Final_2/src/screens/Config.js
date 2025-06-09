import React from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Config() {
  const [notificacoesAtivas, setNotificacoesAtivas] = React.useState(true);
  const [temaEscuro, setTemaEscuro] = React.useState(true);

  const navigation = useNavigation();

  const toggleNotificacoes = () => {
    setNotificacoesAtivas(!notificacoesAtivas);
    Alert.alert(
      'Notificações',
      !notificacoesAtivas
        ? 'Notificações ativadas!'
        : 'Notificações desativadas.'
    );
  };

  const toggleTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  // Estilos dinâmicos com base no tema
  const themeStyles = temaEscuro ? darkTheme : lightTheme;
  

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.title, themeStyles.text]}>Configurações</Text>

      <View style={[styles.settingItem, themeStyles.settingItem]}>
        <Text style={[styles.settingLabel, themeStyles.text]}>Notificações</Text>
        <Switch
          value={notificacoesAtivas}
          onValueChange={toggleNotificacoes}
          thumbColor={notificacoesAtivas ? '#0078f0' : '#888'}
          trackColor={{ false: '#444', true: '#0078f0' }}
        />
      </View>

      <View style={[styles.settingItem, themeStyles.settingItem]}>
        <Text style={[styles.settingLabel, themeStyles.text]}>Tema Escuro</Text>
        <Switch
          value={temaEscuro}
          onValueChange={toggleTema}
          thumbColor={temaEscuro ? '#0078f0' : '#888'}
          trackColor={{ false: '#444', true: '#0078f0' }}
        />
      </View>

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacidade e Segurança</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Idioma</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sobre o App</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => {
          Alert.alert('Sair', 'Deseja realmente sair da conta?', [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Sair',
              onPress: () => navigation.navigate('Login'),
            },
          ]);
        }}
      >
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#0078f0',
  },
  settingLabel: {
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


const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#0a0a12',
  },
  text: {
    color: '#ffffff',
  },
  settingItem: {
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
});

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f5',
  },
  text: {
    color: '#000000',
  },
  settingItem: {
    backgroundColor: '#ffffff',
  },
});
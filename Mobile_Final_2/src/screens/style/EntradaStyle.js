// EntradaStyle.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#0a0a12',
    justifyContent: 'center',
    alignItems: 'center', // Centraliza tudo na tela
  },
  logoContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'rgba(255,255,255,0.05)',
    // // padding: 20,
    // // borderRadius: 12,
    // // shadowColor: '#0078f0',
    // // shadowOffset: { width: 0, height: 4 },
    // // shadowOpacity: 0.4,
    // // shadowRadius: 6,
    // // elevation: 5,
    // width: '100%',
    // height: '100%',
    // resizeMode: 'contain'
  },
  logo: {
    width: 500,          // tamanho fixo
    height: 500,         // tamanho fixo
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;

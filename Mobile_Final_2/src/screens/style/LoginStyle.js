// LoginStyle.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: '#0a0a12',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: { 
        borderWidth: 2, 
        borderColor: '#0078f0', 
        padding: 15, 
        marginBottom: 20, 
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#ffffff',
        fontSize: 16,
    },
    button: { 
        backgroundColor: '#0078f0', 
        padding: 18, 
        borderRadius: 8, 
        marginBottom: 15,
        shadowColor: '#0078f0',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#0078f0',
    },
    buttonText: { 
        color: '#ffffff', 
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    dcLogo: {
      height: 100, 
      alignSelf: 'center',
      marginBottom: 30,
      resizeMode: 'contain',
      maxWidth: '80%',
  },
});

export default styles;
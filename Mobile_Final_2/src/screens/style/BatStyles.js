import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#0a0a12',
    padding: 20,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c28',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#0078f0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  logo: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: { 
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default styles;

import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '90%',
    maxHeight: height * 0.85,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  section: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#444',
  },
  closeButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 10,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

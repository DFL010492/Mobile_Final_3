// ModalStyle.js
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 3,
    width: '90%',
    maxHeight: height * 0.95,
    backgroundColor: '#0a0a12',
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 32,
    shadowColor: '#0078f0',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
  },
  section: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  info: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;

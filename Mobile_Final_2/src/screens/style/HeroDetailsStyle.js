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
    flex: 3,
    width: '90%',
    maxHeight: height * 0.95,
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
    paddingTop: 32,
    flexGrow: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
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
  },
  section: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#444',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

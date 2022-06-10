import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#121211',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
  },
  subTitle: {
    color: '#dedede',
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 16,
    lineHeight: 24,
  },
  blackBox: {
    backgroundColor: 'black',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
  },
  offerTitle: {
    color: 'white',
    fontSize: 20,
    marginVertical: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  },
  buttonSecondary: {
    borderColor: 'white',
    borderWidth: 3,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  },
  buttonSecondaryText: {
    color: 'white',
  },
  Footer: {
    color: '#dedede',
    marginTop: 'auto',
  },

  close: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
});

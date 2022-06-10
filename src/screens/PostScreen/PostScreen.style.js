import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121211',
  },
  errorText: {
    color: 'white',
    margin: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  caption: {
    color: '#787979',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 100,
    marginVertical: 10,
  },
  contentText: {
    marginTop: 10,
    color: '#D8DAD9',
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: 16,
  },
});

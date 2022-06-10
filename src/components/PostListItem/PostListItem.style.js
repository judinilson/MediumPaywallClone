import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
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
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#222122',
    paddingBottom: 10,
  },
  mainContent: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  caption: {
    color: '#787979',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    marginTop: 10,
  },
  postImage: {
    width: 70,
    aspectRatio: 1,
    marginLeft: 10,
  },
});

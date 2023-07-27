import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 5,
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Montserrat',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#212121',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  text: {
    marginTop: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    // color: "#fff",
    color: '#192f6a',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    height: 50,
    // marginTop: 43,
    width: 300,
    gap: 12,
    borderWidth: 1,
    ...Platform.select({
      ios: {borderColor: '#FF6C00', backgroundColor: 'transparent'},
      android: {borderColor: '#FF6C00', backgroundColor: '#FF6C00'},
    }),
    borderRadius: 8,
  },
});

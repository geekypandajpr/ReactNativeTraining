import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row'
  },

  imageContainer: {
    flex: 1.5,

  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop :20

  },

  textContainer:
  {
    flex: 2,
  },

  text: {
    fontSize: 20,
    color: '#d9ff66',
    alignItems: 'center',
    justifyContent: 'center',


  },
  textbox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }

})
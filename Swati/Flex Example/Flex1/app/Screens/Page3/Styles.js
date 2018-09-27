import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    }, 
    body: {
        flex: 7
    },
    footerActive_icon: {
        color: '#4F73F0'
    },
    footer_icon: {
        color: '#808080'
    },
    storyView: {
        flex:0.8,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius : 30,
        borderWidth : 1,
        borderColor : '#808080',
        marginTop : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    image: {
        height:55,
        width: 55,
        borderRadius: 28
      },
})
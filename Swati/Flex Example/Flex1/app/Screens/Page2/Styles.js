import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },    
    body: {
        flex: 7
    },    
    profileImage1: {
        width: '100%'
    },
    profileImage2: {
        width: 130,
        height: 130,
        //marginTop:30,
        justifyContent: 'center'
    },
    image_view: {
        marginTop: -70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name_text: {
        fontSize: 23
    },
    optionView: {
        borderWidth: 2,
        borderColor: '#EAEBEF',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconView1: {
        color: '#4F73F0'
    },
    iconView2: {
        color: '#808080',

    },
    lineView: {
        borderBottomWidth: 2,
        borderBottomColor: '#EAEBEF',
        //padding:15
    },
    statusText: {
        alignItems: 'center',
        padding: 12
    },
    iconSize: {
        fontSize: 20
    },   
    footerActive_icon: {
        color: '#4F73F0'
    },
    footer_icon: {
        color: '#808080'
    }
})
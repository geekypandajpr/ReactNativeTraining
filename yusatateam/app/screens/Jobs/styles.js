import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },

    text: {
        fontSize: 25,
        flex: 7,
        color: '#20B2AA',
        paddingLeft: 15
    },
    text1: {
        fontSize: 22,
        // color : '#20B2AA', 
    },
    viewList: {
        flex: 1,


    },
    search: {
        //flex :0.15,
        height: 60,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 15,
        marginBottom: 0,
        borderStyle: 'dotted',
        borderStyle: 'solid',
        borderColor: 'black'
    }
})

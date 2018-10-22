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
        paddingLeft: 15,
        paddingTop : 10
    },
    text1: {
        fontSize: 22,
        // color : '#20B2AA', 
    },
    text3 : {
        flex: 5, paddingTop: 5, paddingTop : 15
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
        borderRadius: 5,
        margin: 15,
        marginBottom: 0
    },
    listView : {
        flexDirection: 'row', 
        flex: 1
    },
    sublistView : {
        flex: 8, 
        paddingLeft: 15
    },
    subSublist : {
        paddingLeft: 8 
    },
    button : {
        height: 25,
        width: 80,
        margin: 10,
        marginTop : 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    callIcon : {
        fontSize: 25, color: '#4682B4'
    },
    buildingIcon:{
        fontSize: 25, color: '#A0522D'
    },
    userIcon : {
        fontSize: 20, color: '#FF7F50'
    },
    text2 : {
        color: '#CD853F', alignItems: 'flex-end', justifyContent: 'flex-end', flex: 3
    },
    
})

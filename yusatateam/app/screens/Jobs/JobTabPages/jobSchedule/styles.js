import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainCard:
    {
        flex: 1,
        marginLeft :6,
        marginRight :6
    },
    text: {
        fontSize: '1rem',
        flex: 7,
        fontWeight: 'bold',
        color: '#000000',
    },
    text1: {
        fontSize: '0.9rem',
        // color : '#20B2AA', 
    },
    text3 : {
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 

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
        margin: 5,
        marginBottom: 0
    },
    listView : {
        flexDirection: 'row', 
        flex: 1
    },
    sublistView : {
        flex: 8, 
    },
    subSublist : {
    },
    button : {
        height: 25,
        width: 100,
       // margin: 10,
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
        color: '#CD853F', 
        alignItems: 'flex-end',
         justifyContent: 'flex-end'
    },
    
})

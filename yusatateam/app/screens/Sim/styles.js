import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
        paddingTop: 35,
        paddingLeft: 4,
        paddingRight: 4,
    },
    indexstyle:
    {
        backgroundColor: '#2d4150',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 5,
        padding: 5,
        paddingLeft: 5,
        alignContent: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    listcontainer:
    {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
    },

    secondView:
    {
        flex: 1,
        flexDirection: 'row'
    },

    secondHeads:
    {
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'normal'
    },

    secondAns:
    {
        fontSize: 15,
        fontStyle: 'normal'
    }

})
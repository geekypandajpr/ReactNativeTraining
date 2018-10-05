import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    viewStyle:
    {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        flex: 1

    },
    mainCard:
    {
        flex: 1,
        flexDirection: 'row',
    },
    firstView:
    {
        flex: 1
    },
    secondViews:
    {
        flex: 4
    },
    firstRow:
    {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },
    indexText:
    {
        color: '#FFF',
        fontSize: 20
    },
    secondView:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start'
    },
    heading:
    {
        fontFamily: 'normal',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#000000'
    },
    viewHead:
    {
        fontFamily: 'normal',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#00000095',
        
    },
    viewAns:
    {
        fontFamily: 'normal',
        fontSize: 16,
        color: '#00000070',
       
    },
   providerStyle:
    {
        fontFamily: 'normal',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00000095',
        marginRight: 35
    },
    status_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    statusButton: {
        height: 25,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#1f667e',
        marginRight: 10,
        marginBottom : 10
    },

    status_text: {

        color: '#fff'
    },

})
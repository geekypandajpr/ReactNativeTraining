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
    First_View:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    Second_View:
    {
        flex: 4,

    },
    Level_Second:
    {
        flex: 1,
        justifyContent: 'flex-start'
    },

    Level_Row:
    {
        flex: 1,
        flexDirection: 'row'
    },
    Margin_Row:
    {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },
    Header_Style:
    {
        fontFamily: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#000'
    },
    Text_Style:
    {
        fontFamily: 'normal',
        fontSize: '0.9rem',
        color: '#000'
    },
    View_Style:
    {
        fontFamily: 'normal',
        fontSize: '0.9rem',
        color: 'gray'

    },
    indexText:
    {
        color: '#FFF',
        fontSize: 20
    },

    providerStyle:
    {


        fontFamily: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#1f667e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Provider_View:
    {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

    Active_Button:

    {
        borderRadius: 10,
        borderWidth: 3,
        width: 90,
        borderColor: 'white',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Active_Style:
    {

        fontFamily: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    }


})
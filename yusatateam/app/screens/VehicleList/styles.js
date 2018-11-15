import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
    },
    viewStyle:
    {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        flex: 1,
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
        margin : 10
    },
    Level_Second:
    {
        flex: 1,
        justifyContent: 'flex-start',
       
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
    Level_Head:
    {
        flex: 0.6,
        justifyContent: 'center'
    },
    Header_Style:
    {
        fontStyle: 'normal',
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#000'
    },
    Text_Style:
    {
        fontStyle: 'normal',
        fontSize: '1.2rem',
        color: '#000'
    },
    View_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        color: 'gray',
        marginLeft: 10
    },
    Mobile_Style:
    {
        fontStyle: 'normal',
        fontSize: '1.1rem',
        color: 'gray',
    },
    providerStyle:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#1f667e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Provider_View:
    {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
       // marginRight: 10
    },
    Status_Button:
    {
        borderRadius: 15,
        borderWidth: 3,
        width: 100,
        borderColor: 'white',
       // marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Status_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Level_Style:
    {
        flex: 2,
        justifyContent: 'center'
    }


})
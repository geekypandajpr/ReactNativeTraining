import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
       
    },
    MainCard: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'white',
    
    },
    viewStyle:
    {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        flex: 1,
    },
    Profile_View: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'gray'
    },
    Text_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        color: '#000'
    },
    View_Style:
    {
        fontStyle: 'normal',
        fontSize: '0.9rem',
        color: 'gray',
        marginLeft: 10
    },

    Call_Style:
    {
        fontStyle: 'normal',
        fontSize: '0.9rem',
        color: 'gray',
        
    },
});

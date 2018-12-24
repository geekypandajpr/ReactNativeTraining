import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },

    picker : {
        width : '95%'
    },
    header_text: {
        color: '#000',
        fontSize: '1rem',
        fontWeight: '400',
       
    },
    View_Container:
    {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '35%',
    },
    Header_Style:
    {
        backgroundColor: '#fff',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 1
    },
    Text_style: {
        fontSize: '1.3rem',
        color: '#000',
        fontWeight: '500',
    },
    pickerView : {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
       marginTop : 10,
       marginBottom : 10
    },
    Small_View: {
        height : "35%",
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFFFFF',
        
    },
    View_Container : {
        height : "35%",
        width: '100%',
        alignItems: 'center',
    }

})
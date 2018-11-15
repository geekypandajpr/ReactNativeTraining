import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    viewStyle:{
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        flex: 1,
    },
    mainCard:{
        flex: 1,
        flexDirection: 'row',
        // borderRadius: 5,
        // borderWidth: 3,
        borderColor: 'white'
    },
    First_View:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Second_View:{
        flex: 4,
    },
    Margin_Row:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 2
    },
    Level_Second:{
        flex: 1,
        justifyContent: 'flex-start'
    },
    Header_Style:{
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: '500',
        color: '#000'
    },
    Status_Button:{
        borderRadius: 15,
        borderWidth: 3,
        width: 110,
        borderColor: 'white',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Status_Style:{
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Level_Row:{
        flex: 1,
        flexDirection: 'row'
    },
    Level_Head:{
        flex:0.7,
        justifyContent: 'flex-start'
    },
    Text_Style:{
        fontStyle: 'normal',
        fontSize: '0.9rem',
        color: '#000'
    },
    Level_Style:{
        flex: 2,
        justifyContent: 'flex-start'
    },
    View_Style:{
        fontStyle: 'normal',
        fontSize: '0.9rem',
        color: 'gray',
        marginLeft: 10
    },
    modal_style:{
        fontStyle: 'normal',
        fontSize: '0.9rem',
        color: 'gray',
    },
    Provider_View:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 11
    },
    providerStyle:{
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#1f667e',
        justifyContent: 'center',
        alignItems: 'center',
    },


})
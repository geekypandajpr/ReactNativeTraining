import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    viewStyle:{
      padding:4,
        flex: 1,
    },
    mainCard:{
        flex: 1,
        flexDirection: 'row',
        borderColor: 'white'
    },
    First_View:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile_view: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        width: 54,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        alignSelf: 'center',
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
        justifyContent: 'center',
    },
    Header_Style:{
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: '500',
        color: '#000'
    },
    Status_Button:{
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: 'white',
        padding: 2,
        width: 100,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
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
        flex: 0.6,
        justifyContent: 'center'
    },
    Text_Style:{
        fontStyle: 'normal',
        fontSize: '1rem',
        color: '#000'
    },
    Level_Style:{
        flex: 2,
        justifyContent: 'center'
    },
    View_Style:{
        fontStyle: 'normal',
        fontSize: '0.8rem',
        color: 'gray',
        marginLeft: 10
    },
    Mobile_Style:{
        fontStyle: 'normal',
        fontSize: '0.9rem',
        color: 'gray',
    },

    jobTypeView: {
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: 'gray',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    jobTypeText: {
        color: '#1f667e',
        fontSize: '0.8rem'
    },
    
   


})
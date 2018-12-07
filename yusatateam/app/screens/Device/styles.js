import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    viewStyle:{
        flex: 1,
    },
    mainCard:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 3,
        paddingLeft: 4,
        paddingRight: 8,
        paddingBottom: 8,
        paddingTop: 8
    },
    First_View:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        // marginTop: 2
    },
    Level_Second:{
        flex: 1,
        justifyContent: 'center'
    },
    Status_Button:{
        borderRadius: 12,
        padding: 2,
        width: 100,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Status_Style:{
        fontSize: '0.8rem',
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
        justifyContent: 'center'
    },
    Level_Style:{
        flex: 2,
        justifyContent: 'center'
    },
    jobTypeView: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jobTypeText: {
        color: '#000',
        fontSize: '0.8rem'
    },
})
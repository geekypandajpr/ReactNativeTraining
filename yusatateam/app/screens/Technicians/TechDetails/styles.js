import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    container:
    {
        flex: 1,
        backgroundColor: '#efefef',
    },
    upperView:
    {
        flex: 1,
    },
    lowerView:
    {
        flex: 2,
        backgroundColor:'#fff'
    },
    Cname_text: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    row_divide:
    {
        margin :2,
        flexDirection: 'row',
        
    },
    profile_View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile_pic:
    {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
    },
    
    level_text: {
        fontSize: '0.8rem',
        color: '#000'
    },
    Ques_flex: {
        flex: 0.8,
        justifyContent: 'center'
    },
    colon_flex:
    {
        flex: 0.2,
        justifyContent: 'center'
    },
    Ans_flex:
    {
        flex: 2,
        justifyContent: 'center'
    },
    Location_flex:
    {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }


})
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8
    },
    colon_view: {
        flex: 0.2,
        //backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colon: {
        fontSize: '0.8rem',
        color: 'gray'
    },
    leftView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile_view: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#DCDCDC'
    },
    profile_pic: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    rightView: {
        flex: 3.5,
        marginRight: 6,
        marginTop: 6,
        marginBottom: 6
    },
    view_container: {
        flex: 1,
        flexDirection: 'row'
    },
    name: {
        flex:2,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    name_text: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    status: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //backgroundColor: 'green',
    },
   
    status_text: {
        fontSize: '0.8rem',
        //color: '#696969',
        color: '#000'
    },
    phone: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    phone_text: {
        marginLeft: 8,
        fontSize: '0.8rem',
        //color: '#696969',
        color: '#000'
    },
    totaljobs: {
        flex:1,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Location_text: {
        flex:3.5,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft:8
    },
    jobs_text: {
        fontSize: '0.8rem',
        //color: '#696969',
        color: '#000'
    },
    jobs_num: {
        fontSize: '0.8rem',
      
    },
    icon_flex:{  
        flex:0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    jobs_flex:{  
        flex:0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
        
    },
    Status_Button:{
        flex:1,
        borderRadius: 18,
        borderWidth: 4,
        //width: 150,
        borderColor: 'white',
        //marginRight: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor :'#0073b7'
    },
    Status_Style:{
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right_sub_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
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
    },
    jobTypeText: {
        color: '#F98866',
        fontSize: '0.8rem'
    },
});

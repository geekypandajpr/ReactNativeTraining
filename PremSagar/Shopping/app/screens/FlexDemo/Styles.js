import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    upperregion : {
        flex : 3,
        width: '100%',
        alignItems : 'center'
    },
    upperregion_first : {
        flex : 2,
        marginTop : 150,
        alignItems : 'center'
    },
    upperregion_second : {
        flex : 1,
        alignItems : 'center'
    },
    today : {
        fontSize : 21,
        color : 'white'
    },
    temp_container : {
        flex : 1,
        flexDirection : 'row',
        marginTop : 20,
        paddingLeft : 30
    },
    today_temp : {
        fontSize : 72,
        color : 'white'
    },
    cloud_icon : {
        flex : 1 
    },
    lowerregion : {
        flex :1,
        flexDirection : 'row',
        backgroundColor : '#f4f4f4'
    }

})


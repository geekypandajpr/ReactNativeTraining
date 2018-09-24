import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    mainContainer: 
    {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer : 
    {
        flex: 1,
        backgroundColor: '#075e54',
        flexDirection : "row"
    },
    leftHeaderContainer : 
    {
        flex : 2,
        flexDirection : "row",
        // backgroundColor: 'yellow'
    },
    whatsApp : 
    {
        // backgroundColor : "white",
        color: "white",
        alignItems : "center",
        fontSize : 25,
        marginTop : 40,
        paddingLeft : 20,
        fontWeight: "bold",
    },
    rightHeaderContainer : 
    {
        flex : 3,
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        marginTop : 40,
        // justifyContent:'space-between'
        // backgroundColor: 'purple'
    },
    imageIcon : 
    {
        margin : 10,
        padding : 10
        // padding : 20,
        // justifyContent : 'space-between'
    },
    contentContainer : 
    {
        flex : 7,
        backgroundColor: 'white'
    },
    // stripcontentContainer : 
    // {
    //     flex : 1,
    //     flexDirection : "row",
    //     backgroundColor: '#075e54',
    //     justifyContent: "flex-start"
    // },
    // textContentContainer :
    // {
    //     color: "white",
    //     alignItems : "center",
    //     fontSize : 18,
    //     paddingLeft : 50,
    //     // fontWeight: "bold",
    // },
    // fullcontentContainer : 
    // {
    //     flex : 8,
    //     backgroundColor: 'white'
    // },
    // cardWithImage : 
    // {
    //     flex : 1,
    //     flexDirection: 'row', 
    //     justifyContent: 'flex-end',
    //     marginTop : 40,

    // }
})


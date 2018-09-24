import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    mainContainer : 
    {
        flex : 1,
        flexDirection : "row"
    },
    imageContainer : 
    {
        flex : 1,
        flexDirection : "row",
        // marginTop : 10,
        paddingLeft : 15,
        alignItems : "center"
    },
    textContainer :
    {
        flex : 3,
        justifyContent : "flex-start",
        paddingLeft : 5,
        marginTop : 10,
    },
    firstTextContainer : 
    {
        color: "black",
        alignItems : "center",
        fontSize : 18,
        // marginTop : 40,
        // paddingLeft : 20,
        fontWeight: "bold",
    },
    secondTextContainer :
    {
        color: "black",
        alignItems : "center",
        fontSize : 15,
    },
    iconContainer : 
    {
        flex : 1,
        flexDirection : "row",
        justifyContent: 'flex-end',
        marginTop : 20,
        paddingRight : 20
    }
});
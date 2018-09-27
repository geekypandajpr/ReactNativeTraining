import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    icon : {
        fontSize : 80,  
        color:'white'   
    },
    mainContainer : 
    {
        flex : 1,
        alignItems : "center",
    },
    iconContainer : 
    {
        // justifyContent: "flex-end",
        alignItems: "center",
    },
    firstTextContainer : 
    {
        // justifyContent: "flex-start",
        color: "white",
        textAlign : "center",
        fontSize : 30,
        marginTop : 10,
        fontWeight: "bold",
    },
});
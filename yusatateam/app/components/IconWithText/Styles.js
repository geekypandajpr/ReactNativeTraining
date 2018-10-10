import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    textColored:{
        color: "red",
    },
    textNormal:{
        color: "black"
    },
    icon: {
        fontSize: 50,
        color: 'white'
    },
    iconBadgeContainer: {
        flexDirection: "row",
        marginLeft: 20
    },
    badgeContainer: {
        flexDirection: "row",
        borderRadius: 100,
        backgroundColor: "#0073b7",
        justifyContent: "center",
        alignItems: "center",
    },
    badgeTextContainer: {
        color : "white",
    },
    mainContainer: {
        alignItems: "center",
        borderRadius: 15,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    firstTextContainer: {
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontSize: '1.5rem',
        marginTop: 10,
    },
    container:{
        width: "100%",
        height: "100%",
    },
});
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
    },
    iconView: {
        color: 'white',

    },
    pie_chart: {
        //backgroundColor: 'red',
        flex: 1,
        margin : 10
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    firstContainer: {
        flex: 1,
        flexDirection: "row",
    },
    simContainer: {
        flex: 2,
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5,

    },
    deviceContainer: {
        flex: 2,
        marginRight: 5,
        marginTop: 5

    },
    secondContainer: {
        flex: 1,
        flexDirection: "row",

    },
    jobContainer: {
        flex: 2,
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5

    },
    scheduleContainer: {
        flex: 2,
        marginRight: 5,
        marginTop: 5
    },
    thirdContainer: {
        flex: 1,
        flexDirection: "row"

    },
    associationContainer: {
        flex: 1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5
    }
})


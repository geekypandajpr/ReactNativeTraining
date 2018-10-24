import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container1: {
        flex: 1,
        alignItems: 'center'
    },
    fixed: {
        height: 80,
        width: '100%',
        backgroundColor: '#0073b7',
        position: 'absolute',
        top: 0
    },
    upper_view: {
        backgroundColor: '#fff',
        flex: 1,
        height: 260,
        width: '95%',
        borderRadius: 5,
        elevation: 1,
        // marginLeft: 8,
        // marginRight: 8,
        // marginTop: 8,
        marginBottom: 30
    },
    lower_view: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1,
        height: 280,
        width: '95%',
        borderRadius: 5,
        elevation: 1,
        // marginLeft: 8,
        // marginRight: 8, 
        // marginTop: 4, 
        marginBottom: 10
    },
    icon_view: {
        flex:1,
        flexDirection: 'column'
    },
    pagination: {
        position: 'absolute',
        bottom: 0
    },
    dot: {
        backgroundColor:'rgba(0,0,0,.2)',
        width: 15,
        height: 2,
        //borderRadius: 3,
        margin: 2
    },
    activedot: {
        backgroundColor:'#0073b7',
        width: 15,
        height: 2,
        //borderRadius: 3,
        margin: 2
    },

    daily_summary_view: {
        height: 160,
        width: '95%',
        elevation: 1,
        marginBottom: 30,
        borderRadius: 5
    },
    summary_view: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d3d3d3'
    },
    summary_card: {
        height: 130,
        width: '100%',
        backgroundColor: '#fff'
    },
    summary_text: {
        fontSize: '1rem',
        color: '#000'
    },
    calendar_view: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    calendar_icon: {
        fontSize: 26,
        color: '#31a9b8'
    }
})
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3'
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
        height: 280,
        width: '95%',
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 4
    },
    lower_view: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1,
        height: 280,
        width: '95%',
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8, 
        marginTop: 4, 
        marginBottom: 8
    },
    icon_view: {
        flex:1,
        flexDirection: 'column'
    }
})
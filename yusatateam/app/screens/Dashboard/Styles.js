import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3'
    },
    upper_view: {
        backgroundColor: '#fff',
        flex: 1,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 2
    },
    lower_view: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1,
        marginLeft: 4,
        marginRight: 4, 
        marginTop: 2, 
        marginBottom: 4
    },
    icon_view: {
        flex:1,
        flexDirection: 'column'
    }
})
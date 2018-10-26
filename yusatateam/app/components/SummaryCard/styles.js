import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container : {
        flex :1,
        flexDirection: 'row',
        //backgroundColor: '#d3d3d3'
    },
    view1: {
        flex: 1,
        backgroundColor: 'green'
    },
    right_view: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
        elevation: 1,
        backgroundColor: '#fff'
    },






    inner_container: {
        height: '90%',
        width: '95%',
        borderRadius: 5,
        elevation: 1,
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        //backgroundColor: 'red'
    },
    view2: {
        flex: 5,
        flexDirection: 'column',
        //backgroundColor: 'green'
    },
    icon: {
        fontSize: 50,
        //color: '#d9534f'
    },
    heading_view: {
        flex: 1,
        flexDirection: 'row'
    },
    heading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        padding: 10
    },
    total: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //backgroundColor: 'pink',
        padding: 10
    },
    heading_text: {
        fontSize: '0.9rem',
        //color: '#d9534f',
        fontWeight: 'bold'
    },
    total_text: {
        fontSize: '0.9rem',
        color: '#00000090',
        //fontWeight: 'bold'
    },
    content_view: {
        flex: 3,
        //justifyContent: 'center',
        //alignItems: 'flex-start',
        flexDirection: 'column'
        //padding: 10,
        //backgroundColor: 'orange'
    },
    text: {
        fontSize: '0.8rem',
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
});

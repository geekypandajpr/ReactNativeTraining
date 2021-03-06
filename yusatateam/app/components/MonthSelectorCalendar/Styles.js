import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    monthStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerStyle: {
        height: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    horizontalFlexViewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    yearViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
    },
    yearTextStyle: {
        fontSize: '1rem',
        color: '#fff',
        fontWeight: '500'
    },
    previous: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff',
        height: 35,
        width: 60
    },
    prev_text :{
        fontSize: '0.9rem',
        color: '#fff'
    },
    heading: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading_child: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
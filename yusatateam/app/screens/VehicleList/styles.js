import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Cust_name: {
        color: '#000',
        fontWeight: '400',
        fontSize: '1rem'
    },
    Secondrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: '0.8rem'
    },
    Next_page: {
        flex: 1,
        width: '50%',
        justifyContent: "flex-end",
        flexDirection: 'row',
        alignItems: 'center',
    },
    view_more_text: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: '0.8rem'
    }
})
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    card_view: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    first_region: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    first_region_1: {
        width: 150,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '-90deg' }] 
    },
    first_region_text: {
        color: '#fff',
        fontSize: '1rem' 
    },
    white_region: {
        flex: 0.5,
        backgroundColor: '#3E4357' 
    },
    second_region: {
        flex: 0.5,
        flexDirection: 'column',
    },
    second_region_1: {
        flex: 2,
        backgroundColor: '#009688' 
    },
    second_region_2: {
        flex: 1,
        backgroundColor: '#ff8a65'
    },
    second_region_3: {
        flex: 6,
        backgroundColor: '#3E4357'
    },
    third_region_container: {
        flex: 4,
        flexDirection: 'column',
        margin: 10 
    },
    third_region: {
        flex: 4,
    },
    third_region_icon: {
        flex: 1.5
    },
    third_region_text_view: {
        flex: 5,
        flexDirection: 'column'
    },
    third_region_1: {
        flex: 2,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    third_region_2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    third_region_small_text: {
        color: '#ffffff90',
        fontSize: '0.6rem' 
    },
    name: {
        color: '#fff',
        fontSize: '1rem'
    },
    divider: {
        flex: 0.09,
        backgroundColor: '#009688'
    }
});
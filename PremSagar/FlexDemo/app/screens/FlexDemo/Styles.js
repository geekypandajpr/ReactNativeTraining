import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: { 
        flex : 1,
        backgroundColor: '#3E4357',
        alignItems: 'center'
    },
    imageView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    text_view: {
        width: '90%'
    },
    total_revenue: {
        color: '#ffffff40',
        fontSize: '1rem',
    },
    digit: {
        color: '#fff',
        fontSize: '1.8rem',
    },
    cardContainer: {
        justifyContent: 'center', 
        alignItems:'center'
    },
    cardview: {
        width: '90%',
        height: 80,
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 4
    },
    annual_container: {
        flexDirection: 'row',
        height: 150,
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#1f667e'
    },
    textMainContainer: {
        justifyContent: 'center',
    },
    text_container: {
        flexDirection: 'row',
        height: 100,
        width: '90%',
        alignItems: 'center',
    },
    text_child1: {
        flex: 1
    },
    text_child2: {
        flex: 1
    },
    twelve: {
        fontSize: '1.5rem',
        color: '#fd9a61' 
    },
    text2: {
        fontSize: '0.8rem',
        color: '#ffffff60'
    },
    phaseA: {
        fontSize: '1rem',
        color: '#fff' 
    },
    noise: {
        fontSize: '0.6rem',
        color: '#ffffff60',
        marginLeft: 20
    },
    annual :{
        fontSize: '1rem',
        color: '#fff',
        marginLeft: 20
    },
    buy_btn_view: {
        borderRadius: 5,
        backgroundColor: '#57596E',
        height: 30,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buy: { 
        color: '#ffffff80',
        fontSize: '0.9rem'
    }
});
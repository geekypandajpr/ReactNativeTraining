import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    $headerColor : '#1f667e',
    $headerIconColor : '#fff',
    $headerTitleSize : '1.2rem',
    $headerTitleColor : '#fff',

    header: {
        backgroundColor: '$primaryColor'
    },
    icon: {
        fontSize: 24,
        color: '$headerIconColor'
    },
    title: {
        color: '$headerTitleColor',
        fontSize: '$headerTitleSize'
    },
    body: {
        alignItems:'center',
        justifyContent:'center'
    }
})
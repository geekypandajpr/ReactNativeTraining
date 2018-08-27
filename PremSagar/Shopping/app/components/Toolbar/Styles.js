import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    $headerColor : '#fc8e51',
    $headerIconColor : '#fff',
    $headerTitleSize : '1rem',
    $headerTitleColor : '#fff',

    header: {
        backgroundColor: '$headerColor'
    },
    icon: {
        fontSize: '$iconSize',
        color: '$headerIconColor'
    },
    title: {
        color: '$headerTitleColor',
        fontSize: '$headerTitleSize'
    }
})
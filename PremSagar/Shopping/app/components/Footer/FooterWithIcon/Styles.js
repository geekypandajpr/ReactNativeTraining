import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    $footerColor : '#fc8e51',
    $footerIconColor : '#fff',
    $footerIconSize : 15,
    $footerTitleSize : '0.5rem',
    $footerTitleColor : '#fff',

    footer: {
        backgroundColor: '#00000080',
    },
    footerTab: {
        backgroundColor: '#00000080',
    },
    icon: {
        color: '$footerIconColor',
        fontSize: '$footerIconSize'
    },
    text: {
        color: '$footerTitleColor',
        fontSize: '$footerTitleSize'
    },
    button: {
        width: '100%',
        height: '100%',
    }
});
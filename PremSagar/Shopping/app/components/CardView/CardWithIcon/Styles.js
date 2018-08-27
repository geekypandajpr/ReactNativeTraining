import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    $headingFontSize : '0.8rem',
    $subHeadingFontSize : '0.6rem',
    $headingTextColor : '#fff' ,
    $iconColor : '#fff' ,
    $iconSize : 20,

    cardItem: {
        flexDirection: 'row',
        height: 70
    },
    icon: {
        color: '$iconColor',
        fontSize: '$iconSize'
    },
    headingView: {
        flex: 0.9,
        flexDirection: 'column'
    },
    heading: {
        color: '$headingTextColor',
        fontSize: '$headingFontSize',
        fontWeight: 'bold'
    },
    subHeading: {
        color: '$headingTextColor',
        fontSize: '$subHeadingFontSize'
    },
    leftIcon: {
        flex: 0.2,
    },
    rightIcon: {
        flex: 0.1,
        justifyContent: 'flex-end'
    }
})
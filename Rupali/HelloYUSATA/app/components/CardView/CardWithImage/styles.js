import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    cardItem: {
        flexDirection: 'row'
    },
    imageView: {
        flex: 0.5,
        borderWidth: 0.5,
        borderColor: '#000',
        width: '100%',
        margin: 2
    },
    headingView: {
        flex: 0.8
    },
    subHeadingView: {
        flex: 0.2
    },
    heading: {
        fontSize: '$fontSize',
        color: '#000'
    },
    subHeading: {
        fontSize: '$fontSize',
        color: '$primaryColor'
    },
    seperator: {
        height: 1,
        backgroundColor: 'gray',
        width: '100%'
    }
})
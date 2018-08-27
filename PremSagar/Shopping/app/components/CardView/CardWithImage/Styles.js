import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    cardItem: {
        flexDirection: 'row',
        flex: 1
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
    },
    productView: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    imageView: {
        borderWidth: 0.5,
        borderColor: 'gray',
        margin: 2,
        height: 200,
        width: 180,
       // backgroundColor: 'red'
    },
    productNameView: {
        alignItems: 'center',
        width: '100%'
    },
    productNameText: {
        color: '#000',
        fontSize: '0.7rem'
    },
    priceView: {
        alignItems: 'center',
        width: '100%'
    },
    priceText: {
        color: '$primaryColor',
        fontSize: '0.7rem'
    },
    descriptionView: {
        alignItems: 'center',
        width: '100%',
        //backgroundColor: 'green',
        flexWrap: 'wrap'
    },
    descriptionText: {
        color: '#000',
        fontSize: '0.7rem'
    }
})
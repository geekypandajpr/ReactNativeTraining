import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#c2bebe90',
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    titleView: {
        flex: 0.2,
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        padding: 15
    },
    titleText:{
        fontSize: '$fontSize',
        fontWeight: 'bold'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 300,
        justifyContent: 'space-around',
        margin: 1,
    },
    imageView: {
        flex: 0.5,
        height: '100%',
        width: '100%',
        margin: 1,
        backgroundColor: '#fff'
    },
    imageView1: {
        flex: 0.5,
        height: '100%',
        width: '100%',
        margin: 1,
        backgroundColor: 'red'
    }
})
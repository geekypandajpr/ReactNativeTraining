import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({   
    header: {
        flex: 1,
        backgroundColor: '$headerColor',
        flexDirection: 'row'
    },
   
    header_content: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 35,
       
    },
    textstyle: {
        fontsize: $fontSize
    }
})
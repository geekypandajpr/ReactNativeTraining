import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
        
       
    },
   

    listcontainer:
    {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        marginLeft: 4,
        marginRight:4,
        marginTop:2,
        marginBottom:2
    },

    secondView:
    {
        flex: 1,
        flexDirection: 'row'
    },

    secondHeads:
    {
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'normal'
    },

    secondAns:
    {
        fontSize: 15,
        fontStyle: 'normal'
    }

})
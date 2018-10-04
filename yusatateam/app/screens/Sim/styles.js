import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    viewStyle:
    {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        flex:1
        
    },
    mainCard:
    {
        flex: 1,
        flexDirection: 'row',
        shadowOffset: { width: 10, height: 10 },  
        shadowColor: 'black',  
        shadowOpacity: 1,  
        elevation: 3,  
        zIndex:999,  
       
    },
    firstView:
    {
        flex: 1
    },
    secondViews:
    {
        flex: 4
    },
    firstRow:
    {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },
    indexText:
    {
        color: '#FFF',
        fontSize: 20
    },
    secondView:
    {
        flex: 1,
        flexDirection: 'row'
    },
    heading:
    {
        fontSize: 20,
        color: "#1b1b18",
        fontFamily: 'normal',
        fontWeight: 'bold'
    },
    providerStyle:
    {
        marginRight: 5
    },
    status_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    statusButton: {
        height: 25,
        width: 115,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:'#1f667e'
    },

    
    status_text:{
        color: '#fff'
    },

})
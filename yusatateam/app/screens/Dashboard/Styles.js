import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors'

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e2e2e2'
    },
    fixed: {
        height: 70,
        width: '100%',
        backgroundColor: colors.HEADER_COLOR,
        position: 'absolute',
        top: 0
    },

    /**Upper View */
    upper_view: {
        backgroundColor: 'white',
        flex: 3.5,
        width: '100%',
        marginBottom: 4,
    },
    switch: {
        flex: 0.5,
        //backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    },
    pie_chart: {
        //backgroundColor: 'red',
        flex: 3,
    },


    /**Middle View */
    middle_view: {
        backgroundColor: '#fff',
        flex: 3,
        flexDirection: 'row',
        width: '100%',
        marginTop: 4
    },
    icon_view: {
        flex:1,
        flexDirection: 'column',
    },
    button_view: { 
        flex:1,
        //marginLeft: 2,
        //marginRight: 2,
        height: 100
    },


     /**Lower View */
    lower_view: {
        backgroundColor: '#fff',
        flex: 3.5,
        width: '100%',
    },
    summary_switch: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    },
    summary_view: {
        flex: 3,
        // backgroundColor: 'green'
    },
    
    pagination: {
        position: 'absolute',
        bottom: 0
    },
    dot: {
        backgroundColor:'rgba(0,0,0,.2)',
        width: 15,
        height: 2,
        //borderRadius: 3,
        margin: 2
    },
    activedot: {
        backgroundColor:'#007aff',
        width: 15,
        height: 2,
        //borderRadius: 3,
        margin: 2
    },
})
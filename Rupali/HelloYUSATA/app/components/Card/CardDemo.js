import React from 'react'; 
import {
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class CardDemo extends React.Component
{
    render(){
        return(
                <View style={styles.mainContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.leftHeaderContainer}>
                          <Icon name="md-account-child" color='#000' size={30} style={{padding:15}} />
                        </View>
                        <View style={styles.rightHeaderContainer}>
                        <Text style={styles.Text}>Direct Referrals</Text>
                        </View>
                    </View>
                     <View style={styles.contentContainer}>
                     </View>
                </View>
 );
 }
}
const styles = StyleSheet.create({
 mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
 },
 headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "cyan",
    alignItems:"center",
    paddingRight: 9
 },
 leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
 },
 rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
 },
 contentContainer: {
    flex: 6,
 },
 Text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginRight: 50
 },
});




















//     render(){
//         return(
//             <View style={styles.container}>
//             <View>
//               <Text> 1 </Text>
//             </View>
//           </View>
//         );
//     }

// }

// const styles = StyleSheet.create({
//         container: { 
//             backgroundColor:'#4286f4',
//         flex:1,
//          flexDirection: 'row',
//          justifyContent: 'center',
//          alignItems:'center'
//     },
//   });
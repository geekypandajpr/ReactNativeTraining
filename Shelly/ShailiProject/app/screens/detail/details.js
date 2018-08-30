import React from 'react';
import {View,ScrollView} from 'react-native';
import {HeaderTab} from '../../components/HeaderTab';
import styles from './styles';
import {FotterTab} from '../../components/FotterTab';
import { Header, Item, Input, Icon, Button, Card,Text, CardItem,Left, Right,Container} from "native-base";
import {AppLoading} from 'expo';
import { SearchBar } from 'react-native-elements'

export default class Details extends React.Component{

    constructor(props)
    {
      super(props)
      this.state ={loading:true};
    }
  
    async componentWillMount() {
      await Expo.Font.loadAsync({
           Roboto: require("native-base/Fonts/Roboto.ttf"),
           Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
           Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({loading:false});
    }
  
    render(){
         return(
            this.state.loading == true ? <AppLoading/> :
            <View style={{flex:1}}>
                 <HeaderTab
                    icons1='arrow-bold-left'
                    type3='Entypo'
                    onPress={ ()=> this.props.navigation.navigate('Home')}
                    headerTitle='Shopping'
                    icons2='search'
                    type2='FontAwesome'
                    icons3='menu'
                    type1='Entypo'
                />
                <SearchBar
                    containerStyle={{backgroundColor:'#1f667e', borderTopColor:'#1f667e',borderBottomColor:'#1f667e'}}
                    inputStyle={{backgroundColor:'#fff'}}
                   
                    placeholder='Type Here...' />

                <ScrollView  >
                <Card >
                    <CardItem style={{backgroundColor:"gray"}} >
                         <Left>
                             <Icon active name="ios-arrow-dropdown-outline"  />
                         </Left>
                         <Text >
                             Exiciting deals and offerss
                        </Text>
                        <Text >
                             Exiciting deals and offerss
                        </Text>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                     </CardItem>
                        
                        {/* <View style={styles.parent}>
    
                                
                                <View style={styles.child}></View>
                                

                            <View style={styles.child}>
                        
    
                                <View style={styles.child2}>                            
                                </View>
    
                                <View style={styles.child2}>                            
                                </View>
    
                                <View style={styles.child2}>                            
                                </View>
    
                            </View>
                            
    
                            <View style={styles.child}>
    
                                <View style={styles.child2}>                            
                                </View>
    
                                <View style={styles.child2}>
                                </View>
    
                                <View style={styles.child2}>
                                </View>
    
                            </View>
                        
                        </View> */}
                    </Card>
                </ScrollView>
                <FotterTab
                    icon1='home'
                    icon2='camera'
                    icon3='cart'
                    icon4='search'
                    icon5='person'
                />
            </View>    
            );
        }
    }

    export {Details}
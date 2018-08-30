import React from 'react';
import { StyleSheet, Text, View,ImageBackground,StatusBar,ScrollView } from 'react-native';
import Index from '../../Components/Header/Index';
import {TabText} from '../../Components/Tab/Index';
import IconCard from '../../Components/Card/IconCard';
import DetailsList from '../../Components/Card/DetailsList';
import Image from '../../Components/Image/Image';
import {Container,Left,Body,Right,Button,Icon,Title,Card,CardItem} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Styles from './Styles';

const styles=EStyleSheet.create({
   
   card:{
       height:'30%',
       width:'30%',
      
   }
})

const data={
	"firstBlock": [
		{
			"name":"Direct Referrals",
			"value":"17"
		},
		{
			"name":"Left Members",
			"value":"6"
		},
		{
			"name":"Right Members",
			"value":"558"
		},
		{
			"name":"All Downline",
			"value":"564"
		}
	],
	"secondBlock": {
		"name":"Jaava Trade",
		"userid":"jaavatrade",
		"doj":"Jun 10 2017",
		"sponserid":"0",
		"package":"INFINITY",
		"country":"India",
		"contact_no":"+91 92831234567"
	}
}

export default class Home extends React.Component{
   constructor(props){
        super(props)
    // this.changeName=this.changeName.bind(this);
    }
    static navigationOptions = {
        header:null,
      };

  
    render() {
        const { navigate } = this.props.navigation;
        return (
      <ScrollView>
         <View>
             <StatusBar />
             <Index title='Dashboard'/>
             <TabText name1='Home'
                      name2='Incomes & Wallet'
                      name3="Sign-up's"/>
             <View style={Styles.backgroundView}></View>
          <View style={Styles.firstCardView}>
          <Card style={Styles.Card}>
            
                 <View style={{alignItems:'flex-start'}}>
                    <Text style={{fontSize:20}}>Welcome</Text>
                 </View>
            
             <View style={{flexDirection:'row'}}>              
                    <View style={{flex:0.5}}>        
                    <IconCard name='user'
                              type='FontAwesome'
                              text='Swati'
                              text1='95'                  
                              style={{backgroundColor:'#008b8b'}}>

                    </IconCard>
                    </View>
                    <View style={{flex:0.5}}> 
                    <IconCard name='reply'
                              type='Entypo'
                              text='swati'
                              text1='95'                  
                              style={{backgroundColor:'#ff69b4'}}>

                    </IconCard>
                    </View>
             </View>  
             <View style={{flexDirection:'row', justifyContent: 'space-between'}}>  
                    <View style={{flex:0.5}}>       
                    <IconCard name='forward'
                              type='Entypo'
                              text='L'
                              text1='95'                  
                              style={{backgroundColor:'#87cefa'}}>

                    </IconCard>
                    </View>
                    <View style={{flex:0.5}}> 
                    <IconCard name='users'
                              type='FontAwesome'
                              text='swati'
                              text1='95'                  
                              style={{backgroundColor:'#da70d6'}}>

                    </IconCard>
                    </View>                            
             </View>
        </Card>
        </View>
        <View style={Styles.secondCardView}>
       <Card>
           <View>
           <ImageBackground
               style={Styles.imageBackground}
               source={require('../../Assets/Images/backgroundImage1.png')}>
               <Image text='Jaava Trade'/>  
           </ImageBackground>                
           </View>
            <DetailsList text="Name" />
            <DetailsList text="UserId" />
            <DetailsList text="DOJ" />
            <DetailsList text="SponserId" />
            <DetailsList text="Package" />
            <DetailsList text="Country" />

       </Card>
       </View>
     
       </View>  
       
    </ScrollView>   
       
        );
    }
}

export {Home}
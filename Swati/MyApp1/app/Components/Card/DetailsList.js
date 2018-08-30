import React from 'react';
import {Card,CardItem,Text,View} from 'native-base';
import Styles from './Styles';


export default class DetilsList extends React.Component{
    render(){
        return(
            <View Styles={Styles.DetailsListView}>
                
                    <CardItem style={Styles.CardItem} bordered>
                    <View style={{ flex: 0.4 }}>
                        <Text style={Styles.textStyle1} text={this.props.text} />
                    </View>
                    <View style={{flex:0.1}}>
                        <Text style={Styles.textStyle1} text=':'/>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={Styles.textStyle2} text='' />
                    </View>    
                    </CardItem>
                
            </View>
        );
    }
}
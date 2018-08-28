import React from 'react';
import {Card,CardItem,View} from 'native-base';
import Styles from './Styles';
import Text1 from '../Text/Text1';
import Text2 from '../Text/Text2';

export default class DetilsList extends React.Component{
    render(){
        return(
            <View Styles={Styles.DetailsListView}>
                
                    <CardItem Styles={Styles.CardItem} bordered>
                    <View style={{ flex: 0.4 }}>
                        <Text1 text={this.props.text} />
                    </View>
                    <View style={{flex:0.1}}>
                        <Text1 text=':'/>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text2 text='' />
                    </View>    
                    </CardItem>
                
            </View>
        );
    }
}
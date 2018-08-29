import React from 'react';
import {AppLoading} from 'expo';
import Expo from 'expo';
import {StatusBar,View} from 'react-native';

import {Header,Button,Icon,Body,Left,Right,Title} from 'native-base';

export default class HeaderTab extends React.Component
{
    constructor(props) {
    super(props);
    this.state = { loading: true };
}

async componentWillMount() {
 await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
});
this.setState({loading:false});
}
        
render()
    {
        return(

            this.state.loading == true ? <AppLoading/> :
        
            <View>
                <StatusBar 
                backgroundColor={'red'}
                 translucent={false} />
                
            <Header style={{backgroundColor:"#1f667e"}}>
            
                <Left>
                    <Button transparent>
                        <Icon
                         onPress={this.props.onPress}
                         name={this.props.icons1}
                         type={this.props.type3}/>
                    </Button>
                </Left>

                <Body style={{alignItems:"center"}}>
                        <Title>{this.props.headerTitle}</Title>
                </Body>

                <Right>
                    <Button transparent>
                        <Icon name={this.props.icons2} type={this.props.type2}/>
                    </Button>

                    <Button transparent>
                        <Icon  
                        onPress={this.props.onpress}
                         name={this.props.icons3} 
                         type={this.props.type1}
                        />
                    </Button>
                </Right>
          </Header>
          </View>
        )
        
    }



}
export {HeaderTab}
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {IconWithText} from '../Icon/IconWithText/index';
import {Icon,Footer,FooterTab,Badge} from 'native-base';
export default class FooterView extends React.Component {
    render() {
      return (
        <View style={styles.container}>

            {/* // <View>
            // <Icon name={this.props.home}  type={this.props.homeType}></Icon>
            // </View>
            // <View >
            // <Icon name={this.props.percentage}  type={this.props.percentageType}></Icon>
            // </View>
            // <View >
            //     <Icon name={this.props.bag}  type={this.props.bagType}/>
            // </View>
            // <View >
            //     <Icon name={this.props.search}  type={this.props.searchType}/>
            // </View>
            // <View >
            //     <Icon name={this.props.user}  type={this.props.userType}/>
            // </View> */}

              <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
            
        </View>

    );
}
}
export {FooterView}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor: 'grey',
     
    },
  });
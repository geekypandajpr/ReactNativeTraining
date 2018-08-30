import React from 'react';
import {
    Tab,
    Tabs,
    Button,
    Icon,
    Text,
    View,
    TabHeading,
} from 'native-base';
import { AppLoading } from 'expo';
import Styles from './Styles';

export default class TabText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    async componentWillMount(){
        await Expo.Font.loadAsync({
            Roboto:require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({loading:false})
    }

    render() {
        if(this.state.loading) {
            return ( <AppLoading /> )
        }
        return (
            <View>

                <Tabs>
                    <Tab
                        heading={
                        <TabHeading>                                                                                 
                                <Text style={ Styles.activeText }> {this.props.name1} </Text>
                        </TabHeading>}>
                    </Tab>
                    <Tab
                       heading={
                       <TabHeading>                                                   
                                <Text style={ Styles.text }> {this.props.name2} </Text>                         
                        </TabHeading>}>
                    </Tab>
                    <Tab
                        heading={
                        <TabHeading>                                                 
                                <Text style={ Styles.text }> {this.props.name3} </Text>                         
                        </TabHeading> }>                                            
                    </Tab>
                </Tabs>

            </View>
        )
    }
}

export { TabText }
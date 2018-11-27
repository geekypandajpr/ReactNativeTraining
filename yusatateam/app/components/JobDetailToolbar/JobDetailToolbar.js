import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Title,
    Picker,
} from 'native-base';
import { AppLoading } from 'expo';
import styles from './Styles';
import { Statusbar } from '../../components';
import colors from '../../constants/colors';

export default class JobDetailToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    dropdownMenu()
        {
            if( this.props.status == 'Pending')
            {
             return   <Picker
                            note
                            mode="dropdown"
                            style={{ width: 120,color : 'white' }}
                            selectedValue={this.props.selectedValue}
                             onValueChange={this.props.onValueChange}>
                            <Picker.Item label="Job N0#" value="jobNumber" />
                            <Picker.Item label="Schedule Date" value="scheduleDate" />
                            <Picker.Item label="Job Type" value="jobType" />
                        </Picker>
            }
            if(this.props.status == 'schedule')
            {
                return    <Picker
                note
                mode="dropdown"
                style={{ width: 120,color : 'white' }}
                selectedValue={this.props.selectedValue}
                 onValueChange={this.props.onValueChange}>
                <Picker.Item label="Job N0#" value="jobNumber" />
                <Picker.Item label="Schedule Date" value="scheduleDate" />
                <Picker.Item label="Job Type" value="jobType" />
                <Picker.Item label="Technician Name" value="servicePerson" />
            </Picker>
            }
            if(this.props.status == 'completed')
            {
                return   <Picker
                            note
                            mode="dropdown"
                            style={{ width: 120,color : 'white' }}
                            selectedValue={this.props.selectedValue}
                             onValueChange={this.props.onValueChange}>
                            <Picker.Item label="Job N0#" value="jobNumber" />
                            <Picker.Item label="Schedule Date" value="scheduleDate" />
                            <Picker.Item label="Job Type" value="jobType" />
                            <Picker.Item label="Completion Date" value="completedDate" />
                            <Picker.Item label="Technician Name" value="servicePerson" />
                        </Picker> 
            }
            if(this.props.status == 'ReSchedule')
            {
                return     <Picker
                            note
                            mode="dropdown"
                            style={{ width: 120,color : 'white' }}
                            selectedValue={this.props.selectedValue}
                             onValueChange={this.props.onValueChange}>
                            <Picker.Item label="Job N0#" value="jobNumber" />
                            <Picker.Item label="Schedule Date" value="scheduleDate" />
                            <Picker.Item label="Job Type" value="jobType" />
                            <Picker.Item label="Completion Date" value="completedDate" />
                            <Picker.Item label="Technician Name" value="servicePerson" />
                        </Picker>
            }

        }
    render() {
        
      
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View>
                <Statusbar backgroundColor={colors.STATUSBAR_COLOR} barStyle="light-content" />
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.props.onLeftButtonPress}>
                            <Icon name={this.props.leftIcon} type={this.props.leftIconType} style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>
                            {this.props.title}
                        </Title>
                    </Body>
                    <Right style={{borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',height : 30,alignItems : 'center',justifyContent : 'center'}}>  
                        {this.dropdownMenu()}
                        </Right>
                </Header>
            </View>
        )
    }
}

export { JobDetailToolbar }
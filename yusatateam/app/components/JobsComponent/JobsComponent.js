import React from 'react';
import { View, Text, Card, List, ListItem, Left, Right, CheckBox, Body } from 'native-base';
import { Foundation, FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from './Styles';
import colors from '../../constants/colors';

export default class JobsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, checkbox: false }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    render() {
        const jobDatas = this.props.jobDatas
        return (
            <List style={styles.list}>
                <ListItem icon style={styles.listitem}>

                    <CheckBox checked={this.state.checkbox}
                        color={colors.HEADER_COLOR}
                        onPress={() => {this.setState({ checkbox: !this.state.checkbox })}}
                    />

                    <Body style={styles.body}>
                        <View style={styles.first_view}>
                            <View style={{flex:1}}>
                                <Text style={styles.job_num}>{jobDatas.jobNumber}</Text>
                            </View>
                            <View style={styles.job_type_view}>
                                <View style={styles.job_type}>
                                    <Text style={styles.sub_text}>{jobDatas.jobType}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.sub_text}> {jobDatas.scheduleDate} </Text>
                            <Text style={styles.sub_text}> {jobDatas.location} </Text>
                        </View>
                    </Body>

                </ListItem>
            </List>
        )
    }
}

export { JobsComponent }
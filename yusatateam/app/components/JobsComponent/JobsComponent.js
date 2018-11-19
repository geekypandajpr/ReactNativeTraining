import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { View, Text, List, ListItem, CheckBox, Body } from 'native-base';
import styles from './Styles';
import colors from '../../constants/colors';

export default class JobsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, checkbox: false, isCheckboxVisible: false }
        this.modalRef = React.createRef();
        this.onLongPress = this.onLongPress.bind(this);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        })
        this.setState({ isLoading: false })
    }

    onLongPress() {
        console.log('Long pressed');
        this.setState({ isCheckboxVisible: true })
    }

    render() {
        const jobDatas = this.props.jobDatas
        return (
            <List style={styles.list}>
                <ListItem icon style={styles.listitem}>

                    {this.isCheckboxVisible ? 
                        <CheckBox checked={this.state.checkbox}
                            color={colors.HEADER_COLOR}
                            onPress={() => {this.setState({ checkbox: !this.state.checkbox })}}
                        />
                        : null
                    }

                    <Body style={styles.body}>
                        <TouchableWithoutFeedback onLongPress={this.onLongPress}>
                            <View>
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
                            </View>
                        </TouchableWithoutFeedback>
                    </Body>

                </ListItem>
            </List>
        )
    }
}

export { JobsComponent }
import React from 'react';
import { View, Text, Card } from 'native-base';
import { Foundation, FontAwesome } from '@expo/vector-icons';
import styles from './Styles';
import colors from '../../constants/colors';

export default class JobsComponent extends React.Component {
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

    render() {
        const jobDatas = this.props.jobDatas
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    <View style={styles.inner_container}>

                        <View style={styles.headerview}>
                            <View style={styles.jobNumView}>
                                <Text style={styles.jobNumText}>{jobDatas.jobNumber}</Text>
                            </View>
                            <View style={styles.jobTypeView}>
                                <View style={styles.jobType}>
                                    <Text uppercase={false} style={styles.jobText}>{jobDatas.jobType}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.sub_view}>
                            <Text style={styles.sub_text}>{jobDatas.companyName}</Text>
                        </View>

                        <View style={styles.sub_view}>
                            <Text style={styles.sub_text}>{jobDatas.vehicleNumber}</Text>
                        </View>

                        <View style={styles.sub_view}>
                            <Foundation name='calendar' size={25} color={colors.HEADER_COLOR} />
                            <Text style={styles.sub_icon_text}>{jobDatas.scheduleDate}</Text>
                        </View>

                        <View style={styles.sub_view}>
                            <FontAwesome name='map-marker' size={25} color={'red'} />
                            <Text style={styles.sub_icon_text}>{jobDatas.location}</Text>
                        </View>

                    </View>
                </Card>
            </View>
        )
    }
}

export { JobsComponent }
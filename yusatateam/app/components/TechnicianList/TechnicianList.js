import React from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { Card, Text } from 'native-base';
import { AppLoading } from 'expo';
import styles from './styles';
import colors from '../../constants/colors';

export default class TechnicianList extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
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
        const data = this.props.data;
        return (
            this.state.isLoading === true ? <AppLoading /> :
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.props.onPress}>
                        <Card style={styles.card}>

                            <View style={styles.leftView}>
                                <View style={styles.profile_view}>
                                    <Image style={styles.profile_pic} resizeMode='cover'
                                        source={require('../../assets/images/react-native.png')}
                                    />
                                </View>
                            </View>

                            <View style={styles.rightView}>

                                <View style={styles.view_container}>
                                    <View style={styles.name}>
                                        <Text style={styles.name_text}>{data.name}</Text>
                                    </View>
                                    <TouchableWithoutFeedback onPress={this.props.assignJobs}>
                                        <View style={styles.Status_Button} >
                                            <Text style={styles.Status_Style}>Assign </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>

                                <View style={styles.view_container}>
                                    <View style={styles.phone}>
                                        <Ionicons name='md-call' size={15} color='#5cb85c' />
                                        <Text style={styles.phone_text}>{data.contactNumber}</Text>
                                    </View>
                                </View>

                                <View style={styles.view_container}>
                                    <View style={styles.totaljobs}>
                                        <Text style={styles.jobs_text}>Status</Text>
                                    </View>
                                    <View style={styles.colon_view}>
                                        <Text style={styles.colon}>:</Text>
                                    </View>
                                    <View style={styles.Location_text}>
                                        <Text style={styles.jobs_num}>On Job</Text>
                                    </View>
                                </View>

                                <View style={styles.view_container}>
                                    <View style={styles.totaljobs}>
                                        <Entypo name='location-pin' size={20} color='#d9534f' />
                                        <Text style={styles.jobs_num}>Kumbha Marg,Pratp nagar</Text>
                                    </View>
                                </View>

                                {/* <View style={styles.view_container}>
                                    <View style={styles.totaljobs}>
                                        <Text style={styles.jobs_text}>Total jobs</Text>
                                    </View>
                                    <View style={styles.colon_view}>
                                        <Text style={styles.colon}>:</Text>
                                    </View>
                                    <View style={styles.totaljobs}>
                                        <Text style={styles.jobs_num}>{data.totalJobs}</Text>
                                    </View>
                                </View>

                                <View style={styles.view_container}>
                                    <View style={styles.totaljobs}>
                                        <Text style={styles.jobs_text}>Complete jobs</Text>
                                    </View>
                                    <View style={styles.colon_view}>
                                        <Text style={styles.colon}>:</Text>
                                    </View>
                                    <View style={styles.jobs_flex}>
                                        <Text style={styles.jobs_num}>{data.completedJobs}</Text>
                                    </View>
                                    <View style={styles.icon_flex}>
                                        <MaterialIcons name='add-circle-outline'
                                            size={25} color={colors.HEADER_COLOR}
                                            onPress={this.props.assignJobs}
                                        />
                                    </View>
                                </View> */}

                            </View>
                        </Card>
                    </TouchableWithoutFeedback>

                </View>
        )
    }
}
export { TechnicianList }

import React from 'react';
import { View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Card, Text, Button } from 'native-base';

import styles from './styles';

export default class TechnicianList extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
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
        const { viewTodaysJobs, viewDetails, assignJobs } = this.props;
        return (
            this.state.isLoading === true ? <AppLoading /> :
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={viewDetails}>
                    <Card style={styles.card}>

                        <View style={styles.leftView}>
                            <View style={styles.profile_view}>
                                <Image style={styles.profile_pic} resizeMode='cover'
                                    source={require('../../assets/images/react-native.png')}
                                />
                            </View>
                        </View>

                        <View style={styles.rightView}>

                            <View style={styles.main_view}>
                                <View style={styles.view1}>
                                    <Text style={styles.name_text}>{data.name}</Text>
                                </View>
                                <View style={styles.assign_view}>
                                    <Button transparent onPress={assignJobs} style={styles.assign_button}>
                                        <Text style={styles.assign_text}>Assign</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.main_view}>
                                <View style={styles.view1}>
                                    <Ionicons name='md-call' size={16} color='#5cb85c' style={{ marginRight: 6 }} />
                                    <Text style={styles.key_text}>{data.contactNumber}</Text>
                                </View>
                            </View>

                            <View style={styles.main_view}>
                                <View style={styles.view1}>
                                    <Text style={styles.key_text}>Current job</Text>
                                </View>
                                <View style={styles.colon_view}>
                                    <Text style={styles.colon}>:</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={styles.value_text}>JOBS20DEC2018</Text>
                                </View>
                            </View>

                            <View style={styles.main_view}>
                                <View style={styles.view1}>
                                    <Text style={styles.key_text}>Today's jobs</Text>
                                </View>
                                <View style={styles.colon_view}>
                                    <Text style={styles.value_text}>:</Text>
                                </View>
                                <View style={styles.view2}>
                                    <View style={{flex:1, flexDirection:'row'}}>
                                        <View style={{flex: 1}}>
                                            <Text style={styles.value_text}>10</Text>
                                        </View>
                                        <TouchableOpacity onPress={viewTodaysJobs}>
                                            <View style={styles.viewMore}>
                                                <Text style={styles.today_job_text}>JOBS</Text>
                                                <Entypo name='chevron-thin-right' color='#0073b7' size={16} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export { TechnicianList }

import React from 'react';
import { View, Text, Card, List, ListItem, Left, Right, CheckBox, Body } from 'native-base';
import { Foundation, FontAwesome, Ionicons } from '@expo/vector-icons';
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
            <List>
                <ListItem icon style={{ height: 50 }}>
                    <Left>
                        <Ionicons name='ios-checkbox-outline' size={30} color={colors.HEADER_COLOR}/>
                    </Left>
                    <Body style={{marginRight: 10, flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={styles.jobNumView}>
                                <Text style={{fontSize: 15, color: '#000', fontWeight: '500'}}>{jobDatas.jobNumber}</Text>
                            </View>
                            <View style={styles.jobTypeView}>
                                 <View style={styles.jobType}>
                                     <Text uppercase={false} style={styles.jobText}>{jobDatas.jobType}</Text>
                                 </View>
                            </View>
                            {/* <View style={styles.jobTypeView}>
                                <Text style={{fontSize: 12, color: 'gray', fontWeight: '300'}}>{jobDatas.jobType}</Text>
                            </View> */}
                        </View>
                        <View style={{flex:1}}>
                             <Text style={{fontSize: 12, color: 'gray', fontWeight: '300'}}>{jobDatas.scheduleDate}</Text>
                        </View>
                    </Body>
                </ListItem>
            </List>

            // <View style={styles.container}>
            //     <Card style={styles.card}>
            //         <View style={styles.inner_container}>

            //             <View style={styles.headerview}>
            //                 <View style={styles.jobNumView}>
            //                     <Text style={styles.jobNumText}>{jobDatas.jobNumber}</Text>
            //                 </View>
            //                 <View style={styles.jobTypeView}>
            //                     <View style={styles.jobType}>
            //                         <Text uppercase={false} style={styles.jobText}>{jobDatas.jobType}</Text>
            //                     </View>
            //                 </View>
            //             </View>

            //             <View style={styles.sub_view}>
            //                 <Text style={styles.sub_text}>{jobDatas.companyName}</Text>
            //             </View>

            //             <View style={styles.sub_view}>
            //                 <Text style={styles.sub_text}>{jobDatas.vehicleNumber}</Text>
            //             </View>

            //             <View style={styles.sub_view}>
            //                 <Foundation name='calendar' size={25} color={colors.HEADER_COLOR} />
            //                 <Text style={styles.sub_icon_text}>{jobDatas.scheduleDate}</Text>
            //             </View>

            //             <View style={styles.sub_view}>
            //                 <FontAwesome name='map-marker' size={25} color={'red'} />
            //                 <Text style={styles.sub_icon_text}>{jobDatas.location}</Text>
            //             </View>

            //         </View>
            //     </Card>
            // </View>
        )
    }
}

export { JobsComponent }
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Styles';
import {
    Ionicons,
    FontAwesome,
    Entypo,
    MaterialCommunityIcons
} from '@expo/vector-icons';

export default class DetailsView extends React.Component {
    render() {
        const ICON_COLOR = '#ffab91';
        const ICON_SIZE = 20;
        return (
            <View style={styles.card_view}>
                <View style={styles.first_region}>
                    <View style={styles.first_region_1}>
                        <MaterialCommunityIcons name='react' color={ICON_COLOR} size={30} style={{ marginRight: 5 }} />
                        <View style={styles.third_region_text_view}>
                            <Text style={styles.name}>React Native</Text>
                            <Text style={styles.third_region_small_text}>a js library for building ui</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.white_region}></View>

                <View style={styles.second_region}>
                    <View style={styles.second_region_1}></View>
                    <View style={styles.second_region_2}></View>
                    <View style={styles.second_region_3}></View>
                    <View style={styles.second_region_2}></View>
                    <View style={styles.second_region_1}></View>
                </View>

                <View style={styles.white_region}></View>

                <View style={styles.third_region}>
                    <View style={styles.third_region_1}>
                        <View style={styles.third_region_icon}>
                            <Ionicons name='ios-person' color={ICON_COLOR} size={ICON_SIZE} />
                        </View>
                        <View style={styles.third_region_text_view}>
                            <Text style={styles.name}>PREM SAGAR</Text>
                            <Text style={styles.third_region_small_text}>prem@gmail.com</Text>
                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.third_region_container}>
                        <View style={styles.third_region_2}>
                            <View style={styles.third_region_icon}>
                                <FontAwesome name='phone' color={ICON_COLOR} size={ICON_SIZE} />
                            </View>
                            <View style={styles.third_region_text_view}>
                                <Text style={styles.third_region_small_text}>+91 8502653255</Text>
                                <Text style={styles.third_region_small_text}>+0123-4567-12455</Text>
                            </View>
                        </View>
                        <View style={styles.third_region_2}>
                            <View style={styles.third_region_icon}>
                                <Ionicons name='ios-mail' color={ICON_COLOR} size={ICON_SIZE} />
                            </View>
                            <View style={styles.third_region_text_view}>
                                <Text style={styles.third_region_small_text}>prem@yusata.com</Text>
                                <Text style={styles.third_region_small_text}>prem@gmail.com</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.third_region_1}>
                        <View style={styles.third_region_icon}>
                            <FontAwesome name='home' color={ICON_COLOR} size={ICON_SIZE} />
                        </View>
                        <View style={styles.third_region_text_view}>
                            <Text style={styles.third_region_small_text}>84/122 Sector 8 Pratap Nagar Jaipur</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

export { DetailsView }
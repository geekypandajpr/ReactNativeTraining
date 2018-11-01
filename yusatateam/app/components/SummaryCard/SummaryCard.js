import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './styles';
import colors from '../../constants/colors';
import PureChart from 'react-native-pure-chart';

export default class SummaryCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>


                <View style={{flex: 1, padding: 5}}>
                    <View style={{flex: 1, backgroundColor: '#fff', elevation: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{color: '#000', fontSize: 16}}>Device</Text>
                        </View>
                        <View style={{backgroundColor: colors.HEADER_COLOR, height: 2, width: '80%'}}></View>
                        <View style={{flex: 4, justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                            {/* <Text style={{fontSize: 70, color: colors.HEADER_COLOR}}>0</Text> */}
                            <Text style={{fontSize: 30, color: colors.HEADER_COLOR}}>Details</Text>
                        </View>
                    </View>
                </View>



                <View style={{flex: 1, padding: 5}}>
                    
                    <View style={styles.right_view}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderLeftColor: 'red', borderLeftWidth:2}}>
                            <Icon name='devices' type='MaterialIcons'
                                style={{fontSize: 30, color: colors.HOMESCREEN.DEVICECARD_COLOR}}>
                            </Icon>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Devices</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>Total devices: 200</Text>
                        </View>
                    </View>

                  
                    <View style={styles.right_view}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='sim' type='MaterialCommunityIcons'
                                style={{fontSize: 30, color: colors.HOMESCREEN.SIMCARD_COLOR}}>
                            </Icon>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Sims</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>Total sims : 200</Text>
                        </View>
                    </View>

                    
                    <View style={styles.right_view}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='schedule' type='MaterialIcons'
                                style={{fontSize: 30, color: colors.HOMESCREEN.JOBSCARD_COLOR}}>
                            </Icon>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Jobs</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>Total jobs : 200</Text>
                        </View>
                    </View>
                </View>

                {/* <View style={styles.inner_container}> */}
                    {/* <LinearGradient colors={this.props.colors} style={{flex: 1, borderRadius: 5}}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    > */}
                        {/* <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={styles.view1}>
                                <Icon name={this.props.icon} type={this.props.icontype} style={[styles.icon,{color:this.props.iconColor}]}></Icon>
                            </View>
                            <View style={{flex:0.02, justifyContent:'center', alignItems: 'center'}}>
                                <View style={{backgroundColor: 'gray', height: '80%', width: '100%'}}></View>
                            </View>
                            <View style={styles.view2}>
                                <View style={styles.heading_view}>
                                    <View style={styles.heading}><Text style={[styles.heading_text, {color:this.props.headingColor}]}>{this.props.heading}</Text></View>
                                    <View style={styles.total}><Text style={styles.total_text}>{this.props.total}</Text></View>
                                </View>
                                <View style={styles.content_view}>
                                    <Text style={styles.text}>{this.props.text1}</Text>
                                    <Text style={styles.text}>{this.props.text2}</Text>
                                </View>
                            </View>
                        </View> */}
                    {/* </LinearGradient> */}
                {/* </View> */}
            </View>
        )
    }
}
export {SummaryCard}

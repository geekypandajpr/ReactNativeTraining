import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { StackedBar } from '../../../components/StackedChart/StackedChart';

export default class TechDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upper_View}>
                    <View style={styles.profile_View}>
                        <Image style={styles.profile_pic} resizeMode='cover'
                            source={require('../../../assets/images/react-native.png')}></Image>
                    </View>
                    <View style={{ flex: 2,justifyContent:'center'}}>
                        <View style={styles.row_divide}>
                            <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={styles.Cname_text}>Shaili Mittal</Text>
                            </View>
                        </View>

                        <View style={styles.row_divide}>
                            <View style={styles.Ques_flex}>
                                <Text style={styles.name_text}>Call</Text>
                            </View>
                            <View style={styles.colon_flex}>
                                <Text>:</Text>
                            </View>
                            <View style={styles.Call_flex}>
                                <Ionicons name='md-call' size={16} color='#5cb85c' />
                                <Text style={[styles.level_text,{marginLeft:5}]}>9829567890</Text>
                            </View>
                        </View>


                         <View style={styles.row_divide}>
                            <View style={styles.Ques_flex}>
                                <Text style={styles.name_text}>Status</Text>
                            </View>
                            <View style={styles.colon_flex}>
                                <Text>:</Text>
                            </View>
                            <View style={styles.Ans_flex}>
                                <Text style={styles.level_text}>On Job</Text>
                            </View>
                        </View>

                        <View style={styles.row_divide}>
                            <View style={styles.Ques_flex}>
                                <Text style={styles.name_text}>Job No.</Text>
                            </View>
                            <View style={styles.colon_flex}>
                                <Text>:</Text>
                            </View>
                            <View style={styles.Ans_flex}>
                                <Text style={styles.level_text}>4</Text>
                            </View>
                        </View>

                        <View style={styles.row_divide}>
                            <View style={styles.Location_flex}>
                            <Entypo name='location-pin' size={24} color='#d9534f' />
                                <Text style={styles.name_text}>Sector 10,Pratap Nagar,Kumbha Marg,Jaipur</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.lowerView}>
                    <StackedBar></StackedBar>
                </View>
            </View >
        );
    }
}
export { TechDetails }
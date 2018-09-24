import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    Image
} from 'react-native';
import styles from './Styles';
import {ScrollView } from 'react-native';
import {CardWithImage} from '../../components/CardView/CardWithImage';

export default class FlexDemoNew extends React.Component {
    render() {
        return (
        <View style = {styles.mainContainer}>
            <View style = {styles.headerContainer}>
                <View style = {styles.leftHeaderContainer}>
                    <Text style = {styles.whatsApp}>ChatsApp</Text>
                </View>
                <View style = {styles.rightHeaderContainer}>
                    <Image style = {styles. imageIcon} source = {require("../../assets/images/magnifying-glassSize.png")}></Image>
                    <Image style = {styles. imageIcon} source = {require("../../assets/images/phone-callSize.png")}></Image>
                    <Image style = {styles. imageIcon} source = {require("../../assets/images/moreSize.png")}></Image>
                </View>
            </View>
            <View style = {styles.contentContainer}>
            <ScrollView>
                {/* <View style = {styles.stripcontentContainer}>
                <View>
                    <Text style = {styles.textContentContainer}>CHATS</Text>
                </View>
                <View>
                    <Text style = {styles.textContentContainer}>STATUS</Text>
                </View>
                <View>
                    <Text style = {styles.textContentContainer}>CALLS</Text>
                </View>
                </View> */}
                <View style = {styles.fullcontentContainer}>
                        <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Rupali Pandey' 
                                name1 = "21-Sept-2018 12:11 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Vinayak Sharma' 
                                name1 = "19-Sept-2018 06:21 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Shaili Mittal' 
                                name1 = "03-Sept-2018 11:31 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Anmol Bansal' 
                                name1 = "17-July-2018 10:41 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Mayank Jain' 
                                name1 = "22-May-2018 06:17 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Diksha Srivastava' 
                                name1 = "11-Jan-2018 05:51 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Vikram Yadav' 
                                name1 = "28-Feb-2018 12:17 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                              <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Rupali Pandey' 
                                name1 = "21-Sept-2018 12:11 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Vinayak Sharma' 
                                name1 = "19-Sept-2018 06:21 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Shaili Mittal' 
                                name1 = "03-Sept-2018 11:31 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Anmol Bansal' 
                                name1 = "17-July-2018 10:41 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Mayank Jain' 
                                name1 = "22-May-2018 06:17 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Diksha Srivastava' 
                                name1 = "11-Jan-2018 05:51 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Vikram Yadav' 
                                name1 = "28-Feb-2018 12:17 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                              <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Rupali Pandey' 
                                name1 = "21-Sept-2018 12:11 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Vinayak Sharma' 
                                name1 = "19-Sept-2018 06:21 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Shaili Mittal' 
                                name1 = "03-Sept-2018 11:31 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Anmol Bansal' 
                                name1 = "17-July-2018 10:41 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Mayank Jain' 
                                name1 = "22-May-2018 06:17 PM"
                                source1 = {require('../../assets/images/video-symbol-of-black-camera2.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/girl.png')} 
                                name= 'Diksha Srivastava' 
                                name1 = "11-Jan-2018 05:51 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                                <CardWithImage 
                                source = {require('../../assets/images/man2.png')} 
                                name= 'Vikram Yadav' 
                                name1 = "28-Feb-2018 12:17 PM"
                                source1 = {require('../../assets/images/old-handphone.png')} 
                            / >
                </View>
            </ScrollView> 
        </View>
    </View>
        )
    }
}

export { FlexDemoNew }
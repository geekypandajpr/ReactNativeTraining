import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from 'native-base'
export default class SearchBar extends React.Component {
    dropdownMenu()
    {
        if( this.props.status == 'Pending')
        {
         return   <Picker
                        note
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        style={styles.dropdown}
                        selectedValue={this.props.selectedValue}
                         onValueChange={this.props.onValueChange}>
                        <Picker.Item label="Job N0#" value="jobNumber" />
                        <Picker.Item label="Schedule Date" value="scheduleDate" />
                        <Picker.Item label="Job Type" value="jobType" />
                    </Picker>
        }
        if(this.props.status == 'schedule')
        {
            return    <Picker
            note
            mode="dropdown"
            style={styles.dropdown}
            selectedValue={this.props.selectedValue}
             onValueChange={this.props.onValueChange}>
            <Picker.Item label="Job N0#" value="jobNumber" />
            <Picker.Item label="Schedule Date" value="scheduleDate" />
            <Picker.Item label="Job Type" value="jobType" />
            <Picker.Item label="Technician Name" value="servicePerson" />
        </Picker>
        }
        if(this.props.status == 'completed')
        {
            return   <Picker
                        note
                        mode="dropdown"
                        style={styles.dropdown}
                        selectedValue={this.props.selectedValue}
                         onValueChange={this.props.onValueChange}>
                        <Picker.Item label="Job N0#" value="jobNumber" />
                        <Picker.Item label="Schedule Date" value="scheduleDate" />
                        <Picker.Item label="Job Type" value="jobType" />
                        <Picker.Item label="Completion Date" value="completedDate" />
                        <Picker.Item label="Technician Name" value="servicePerson" />
                    </Picker> 
        }
        if(this.props.status == 'ReSchedule')
        {
            return     <Picker
                        note
                        mode="dropdown"
                        style={styles.dropdown}
                        selectedValue={this.props.selectedValue}
                         onValueChange={this.props.onValueChange}>
                        <Picker.Item label="Job N0#" value="jobNumber" />
                        <Picker.Item label="Schedule Date" value="scheduleDate" />
                        <Picker.Item label="Job Type" value="jobType" />
                        <Picker.Item label="Completion Date" value="completedDate" />
                        <Picker.Item label="Technician Name" value="servicePerson" />
                    </Picker>
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style ={styles.search_view}>
                    <View style={styles.icon_view}>
                        <Ionicons  name="md-search" size={20} color="#00000090"/>
                    </View>
                    <View style={styles.textinput_view}>
                        <TextInput
                            style={styles.text_input}
                            placeholder={this.props.placeholder}
                            underlineColorAndroid="transparent"
                            returnKeyType='search'
                            autoFocus={false}
                            clearButtonMode="while-editing"
                            onChangeText={this.props.onChangeText}
                        />
                    </View>
                    <View style={{flex : 5,borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',alignItems : 'center',justifyContent : 'center'}}>
                        {this.dropdownMenu()}
                    </View>
                </View>
            </View>
        );
      }
    }
export { SearchBar }
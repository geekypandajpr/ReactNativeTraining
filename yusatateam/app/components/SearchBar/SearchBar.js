import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import {Picker,Button,Text} from 'native-base';
import {FilterJob} from '../FilterJob/FilterJob'
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            status: 'Pending',
            value : 'jobNumber'
        }
        this.jobFilter = React.createRef();
        this.openFilterPage = this.openFilterPage.bind(this);
    };
    selectedValue(data) {
        this.setState({value : data})
    }
    openFilterPage() {
        this.jobFilter.current.setModalVisible(true, this.state.status);
    }
    render() {
        console.log(this.state.value)
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
                    <View style={{flex : 3,borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',alignItems : 'center',justifyContent : 'center'}}>
                        <Button full info onPress={this.openFilterPage}>
                        <Text>Filter</Text>
                    </Button>
                    </View>
                </View>
                <FilterJob ref={this.jobFilter} getSelected={(data) => this.selectedValue(data)} />
            </View>
        );
      }
    }
export { SearchBar }
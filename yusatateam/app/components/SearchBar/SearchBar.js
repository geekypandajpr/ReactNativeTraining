import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Picker, Button} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class SearchBar extends React.Component {
    render() {
        const {
            isDropdown,
            pickerItem,
            onChangeText,
            placeholder,
            selectedValue,
            onValueChange,
            onSearch,
            value
        } = this.props;
        return (
            <View style={styles.top_view}>
                {isDropdown ? 
                    <View style={styles.dropdown_view}>
                        <View style={styles.dropdown}>
                            <Picker
                                mode="dropdown"
                                style={{ width: '100%', height: '100%' }}
                                //placeholder="Select Device"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={selectedValue}
                                onValueChange={onValueChange}
                            >
                            {pickerItem.map((item, index) => 
                                <Picker.Item key={index} label={item.label} value={item.value} />
                            )}
                            </Picker>
                        </View>
                    </View>
                : null }

                <View style={styles.search_view}>
                    <View style={styles.search}>
                        <View style={styles.textinput_view}>
                            <TextInput
                                style={styles.text_input}
                                placeholder={placeholder}
                                underlineColorAndroid="transparent"
                                returnKeyType='search'
                                autoFocus={false}
                                value={value}
                                clearButtonMode="while-editing"
                                onSubmitEditing={onSearch}
                                onChangeText={onChangeText}
                            />
                        </View>
                        <View style={{ flex: 0.18 }}>
                            <Button transparent style={styles.searchbutton} onPress={onSearch}>
                                <Ionicons name="md-search" size={20} color="gray" />
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
            // <View style={styles.container}>
            //     <View style ={styles.search_view}>
                    
            //         <View style={styles.textinput_view}>
            //             <TextInput
            //                 style={styles.text_input}
            //                 placeholder={this.props.placeholder}
            //                 underlineColorAndroid="transparent"
            //                 returnKeyType='search'
            //                 autoFocus={false}
            //                 clearButtonMode="while-editing"
            //                 onChangeText={this.props.onChangeText}
            //             />
            //         </View>
            //         <View style={styles.icon_view}>
            //             <Ionicons  name="md-search" size={20} color="#00000090"/>
            //         </View>
            //     </View>
            // </View>
        );
      }
    }
export { SearchBar }
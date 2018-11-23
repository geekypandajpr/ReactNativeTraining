import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MonthSelectorCalendar from 'react-native-month-selector';


export default class Year extends React.Component{
    constructor(){
        super();
        this.state={
            month : ''
        }
    }

     render(){
         return (
              <View style={{flex:1}}>
                    <MonthSelectorCalendar
                selectedDate={this.state.month}
                monthTapped={(date) => this.setState({ month: date })}
                />
              </View>
          );
      }
    }

export { Year }
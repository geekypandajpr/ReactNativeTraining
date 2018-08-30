import React from 'react';
import {Card,CardItem,Text,View} from 'native-base';
import Styles from './Styles';
import SelectMultiple from 'react-native-select-multiple'

export default class QuestionCard extends React.Component{
    state={selectedQuestions:[]}
    render(){
        return(
            <View style={Styles.cardView}>
            <Card>
                <CardItem>
                    <Text></Text>
                    <SelectMultiple
                        //items={fruits}
                        //renderLabel={renderLabel}
                        selectedItems={this.state.selectedQuestions}
                        //onSelectionsChange={this.onSelectionsChange} 
                    />
                </CardItem>
            </Card>
            </View>
        );
    }
}
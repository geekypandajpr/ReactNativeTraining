import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { Content, Container, Form, Item, Input, Label, Icon } from 'native-base';
export default class Float extends React.Component {
    render() {
        return (
            <Form >
                {/* <FontAwesome name = {this.props.icons} size={32} color="green"/> */}
                <Item floatingLabel style={{ marginTop: 0 }}>
                    <Label>{this.props.name}</Label>
                    <Input />
                </Item>
            </Form>

        );
    }
}
export { Float }
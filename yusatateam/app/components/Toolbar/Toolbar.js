import React from 'react';
import {
    Container,
    Header,
    Left,
    Right,
    Button,
    Title,
    Icon
} from 'native-base';

export default class Toolbar extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        )
    }
}

export { Toolbar }
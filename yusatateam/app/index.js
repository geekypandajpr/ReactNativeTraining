import React from 'react';
import { AppRouter } from './router';

/**For Toast to work, we need to wrap our topmost component inside <Root> from native-base.*/
import { Root } from 'native-base';

export default class Index extends React.Component {
    render() {
        return (
            <Root>
                <AppRouter />
            </Root>
        )
    }
}
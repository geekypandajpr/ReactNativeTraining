import React from 'react';
import { Provider } from 'react-redux';
/**For Toast to work, we need to wrap our topmost component inside <Root> from native-base.*/
import { Root } from 'native-base';

import { Navigator } from './router';
import configureStore from './redux/store/configureStore';

const store = configureStore();

export default class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Navigator />
                </Root>
            </Provider>
        );
    }
}
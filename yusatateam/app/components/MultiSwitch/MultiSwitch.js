import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    PanResponder,
    View,
    Platform
} from 'react-native';

import Buttons from './Buttons';
import styles from './styles';

const { width } = Dimensions.get('window');
// import PropTypes from 'prop-types';

export default class MultiSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComponentReady: true,
            position: new Animated.Value(0),
            posValue: 0,
            selectedPosition: 0,
            duration: 100,
            mainWidth: width - 20,
            switcherWidth: width / 3,
            thresholdDistance: width - 8 - width / 2.4
        };
        this.isParentScrollDisabled = false;
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: () => {
                // disable parent scroll if slider is inside a scrollview
                if (!this.isParentScrollDisabled) {
                    //this.props.disableScroll(false);
                    //this.isParentScrollDisabled = true;
                }
            },

            onPanResponderMove: (evt, gestureState) => {
                let finalValue = gestureState.dx + this.state.posValue;
                if (
                    finalValue >= 0 &&
                    finalValue <= this.state.thresholdDistance
                )
                    this.state.position.setValue(
                        this.state.posValue + gestureState.dx
                    );
            },

            onPanResponderTerminationRequest: () => true,

            onPanResponderRelease: (evt, gestureState) => {
                let finalValue = gestureState.dx + this.state.posValue;


                //this.isParentScrollDisabled = false;
                //this.props.disableScroll(true);


                if (gestureState.dx > 0) {
                    if (finalValue >= 0 && finalValue <= 30) {
                        this.notStartedSelected();
                    } else if (finalValue >= 30 && finalValue <= 121) {
                        this.inProgressSelected();
                    } else if (finalValue >= 121 && finalValue <= 280) {
                        if (gestureState.dx > 0) {
                            this.completeSelected();
                        } else {
                            this.inProgressSelected();
                        }
                    }
                } else {
                    if (finalValue >= 78 && finalValue <= 175) {
                        this.inProgressSelected();
                    } else if (finalValue >= -100 && finalValue <= 78) {
                        this.notStartedSelected();
                    } else {
                        this.completeSelected();
                    }
                }
            },

            onPanResponderTerminate: () => {},
            onShouldBlockNativeResponder: () => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            }
        });
    }

    notStartedSelected = () => {
        Animated.timing(this.state.position, {
            toValue: Platform.OS === 'ios' ? -2 : 0,
            duration: this.state.duration
        }).start();
        setTimeout(() => {
            this.setState({
                posValue: Platform.OS === 'ios' ? -2 : 0,
                selectedPosition: 0
            });
        }, 100);
        if (this.state.isComponentReady) {
            this.props.onStatusChanged('Sims');
        }
    };

    inProgressSelected = () => {
        Animated.timing(this.state.position, {
            toValue: this.state.mainWidth / 2 - this.state.switcherWidth / 2,
            duration: this.state.duration
        }).start();
        setTimeout(() => {
            this.setState({
                posValue:
                    this.state.mainWidth / 2 - this.state.switcherWidth / 2,
                selectedPosition: 1
            });
        }, 100);
        if (this.state.isComponentReady) {
            this.props.onStatusChanged('Devices');
        }
    };

    completeSelected = () => {
        Animated.timing(this.state.position, {
            toValue:
                Platform.OS === 'ios'
                    ? this.state.mainWidth - this.state.switcherWidth
                    : this.state.mainWidth - this.state.switcherWidth - 2,
            duration: this.state.duration
        }).start();
        setTimeout(() => {
            this.setState({
                posValue:
                    Platform.OS === 'ios'
                        ? this.state.mainWidth - this.state.switcherWidth
                        : this.state.mainWidth - this.state.switcherWidth - 2,
                selectedPosition: 2
            });
        }, 100);
        if (this.state.isComponentReady) {
             this.props.onStatusChanged('Jobs');
        }
    };

    getStatus = () => {
        switch (this.state.selectedPosition) {
            case 0:
                return this.props.buttonName1;
            case 1:
                return this.props.buttonName2;
            case 2:
                return this.props.buttonName3;
            }
    };

    getColor = () => {
        switch (this.state.selectedPosition) {
            case 0:
                return this.props.buttonColor1;
            case 1:
                return this.props.buttonColor2;
            case 2:
                return this.props.buttonColor3;
            }
    }

    render() {
        return (
            <View style={styles.container}>
                <Buttons type={this.props.buttonName1}
                    onPress={this.notStartedSelected}
                    buttonText={{color: 'gray', fontSize: 13}} 
                />
                <Buttons type={this.props.buttonName2}
                    onPress={this.inProgressSelected}
                    buttonText={{color: 'gray', fontSize: 13}}
                />
                <Buttons type={this.props.buttonName3}
                    onPress={this.completeSelected}
                    buttonText={{color: 'gray', fontSize: 13}}
                />
                <Animated.View
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.switcher,
                        {
                            transform: [{ translateX: this.state.position }],
                            backgroundColor: this.getColor()
                        }
                    ]}
                >
                    <Buttons type={this.getStatus()} active={true}
                        buttonText={{color: '#fff', fontSize: 14, fontWeight: '400'}}
                    />
                </Animated.View>
            </View>
        );
    }
}

export { MultiSwitch }

// MultiSwitch.propTypes = {
//     disableScroll: PropTypes.func,
//     onStatusChanged: PropTypes.func
// };
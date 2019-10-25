import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
export default class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        console.log('did focus')
        ToastAndroid.show('componentDidMount SettingScreen!', ToastAndroid.SHORT);
      },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SettingScreen!</Text>
      </View>
    );
  }
}

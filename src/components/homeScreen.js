import React from 'react';
import {View, Text, Image} from 'react-native';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        this.getData();
      },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  getData() {
    var storm_api = `http://api2.thaiwater.net:9200/api/v1/mobile/MBtOTp6IUXbjaCxhQoFQNrFgZUCzNgbo/th/storm`;
    fetch(storm_api)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomeScreen!</Text>
      </View>
    );
  }
}

export default HomeScreen;

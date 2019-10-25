import React from 'react';
import {
  View,
  Text,
  Image,
  ViewPagerAndroid,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        // this.getData();
      },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  getData() {
    var storm_api = `http://api2.thaiwater.net:9200/api/v1/mobile/MBtOTp6IUXbjaCxhQoFQNrFgZUCzNgbo/th/storm`;
    fetch(storm_api);
  }

  getDataSuccess() {
    var storm_api = `http://api2.thaiwater.net:9200/api/v1/mobile/MBtOTp6IUXbjaCxhQoFQNrFgZUCzNgbo/th/storm`;
    fetch(storm_api);
  }

  getDataError() {
    var error_api = `http://api2.thaiwater.net:9200/api/v1/mobile/ExampleUnsuccressful/th/storm111`;
    fetch(error_api);
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Text style={styles.topic}>Mobile ThaiWater</Text>

        <Text style={styles.title}>
          <Text style={styles.mainAPI}> Storm : </Text>http://api2.thaiwater.net:9200/api/v1/mobile/MBtOTp6IUXbjaCxhQoFQNrFgZUCzNgbo/th/storm
        </Text>
        <View style={styles.Dialog}>
          <TouchableOpacity onPress={() => this.getDataSuccess()} style={styles.Btn}>
            <Button title="Successful" onPress={() => this.getDataSuccess()}> </Button>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          <Text style={styles.mainAPI}> Storm Error : </Text>http://api2.thaiwater.net:9200/api/v1/mobile/ExampleUnsuccressful/th/storm
        </Text>
        <View style={styles.Dialog}>
          <TouchableOpacity onPress={() => this.getDataError()} style={styles.Btn}>
            <Button title="error" onPress={() => this.getDataError()}> </Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  topic: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  mainAPI: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  Btn: {
    width: 120,
  },
  Dialog: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

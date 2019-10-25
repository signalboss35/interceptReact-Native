import React from 'react';
import {View, Text, AppRegistry} from 'react-native';
import { createAppContainer, createSwitchNavigator, StackActions, NavigationActions } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import HomeScreen from './src/components/homeScreen';
import SettingScreen from './src/components/settingScreen';
import TabBar from './src/components/tabBar';
import HttpClient from './src/components/HttpClient';
const Http_Client = new HttpClient();
AppRegistry.registerComponent(Http_Client.Intercept(), () => App);

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigation => {
      return {
        header: null,
      };
    },
  },
});

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: navigation => {
      return {
        header: null,
      };
    },
  },
});

const App = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15 }}>HOME</Text>,
      },
    },
    Setting: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15 }}>SETTING</Text>,
      },
    },
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
    tabBarOptions: {
      tabFeatured: 'Insert',
      backgroundFeaturedIcon: '#FFF',
      activeFeaturedTintColor: '#FFF',
      inactiveFeatureTintColor: '#E1E3DB',
      showLabel: true,
      backgroundColor: 'yellow',
      activeTintColor: '#42619b',
      inactiveTintColor: '#E1E3DB',
      style: {
        ...Platform.select({
          ios: {
            ...ifIphoneX(
              {
                height: 105,
              },
              {
                height: 65,
              },
            ),
          },
          android: {
            height: 50,
          },
        }),
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F2F3EF',
      },
      tabStyle: {},
    },
  },
);

export default createAppContainer(App);

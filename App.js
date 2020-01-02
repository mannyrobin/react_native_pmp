import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import ConfirmSMSScreen from './screens/ConfirmSMSScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import ArticleScreen from './screens/ArticleScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


/*
Navigator Options
*/

const MainNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  ConfirmSMS: {
    screen: ConfirmSMSScreen,
  },
  ChangePassword: {
    screen: ChangePasswordScreen
  },
  MainMenu: {
    screen: MainMenuScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    }
  },
  News: {
    screen: NewsScreen,
    navigationOptions: {
      header: null,
    }
  },
  Article: {
    screen: ArticleScreen,
    navigationOptions: {
      title: 'Статья'
    }
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

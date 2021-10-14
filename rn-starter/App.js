import firebase from 'firebase';
import { LogBox } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen, { homeScreenOptions } from "./src/screens/HomeScreen";
import SearchScreen, { searchScreenOptions } from "./src/screens/SearchScreen";
import SettingsScreen, { settingScreenOptions } from "./src/screens/SettingsScreen";
import UserOpinionScreen from "./src/screens/UserOpinionScreen";
import RegisterScreen2, { registerScreenOptions } from "./src/screens/RegisterScreen2";
import ReportProblemsScreen from "./src/screens/ReportProblemsScreen";
import AlterInfoScreen from "./src/screens/AlterInfoScreen";
import BasicScreen, { basicScreenOptions } from './src/screens/screenmodels/BasicScreen';

import FirebaseConfig from './src/constants/FirebaseConfig';

//Colors Trangender Banner blue #54b9f8 white #ffffff pink #ffb3be --> Deixar a cor base do app como branca e a parte de cima como azul e a debaixo como rosa,
//ou deixar as letras em branco
//Color GenderQueer/NonBinary yellow #ffff1a white #ffffff purple #b366ff black #333333

//LogBox.ignoreLogs(['Setting a timer']);

if (!firebase.apps.length) {
  console.log('[Firebase started]');
  firebase.initializeApp(FirebaseConfig.FirebaseConfig);
}

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: {
      screen: HomeScreen,
      navigationOptions: homeScreenOptions
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: searchScreenOptions
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: settingScreenOptions,
    },
    UserOpinion: UserOpinionScreen,
    Register2: {
      screen: RegisterScreen2,
      navigationOptions: registerScreenOptions,
    },
    UserOpinion: UserOpinionScreen,
    ReportProblems: ReportProblemsScreen,
    AlterInfo: AlterInfoScreen,
    BasicScreen: {
      screen: BasicScreen,
      navigationOptions: basicScreenOptions,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

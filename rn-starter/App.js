import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import UserOpinionScreen from "./src/screens/UserOpinionScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
    Search: SearchScreen,
    Settings: SettingsScreen,
    UserOpinion: UserOpinionScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

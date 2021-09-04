import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import UserOpinionScreen from "./src/screens/UserOpinionScreen";
import RegisterScreen2 from "./src/screens/RegisterScreen2";

//Colors Trangender Banner blue #54b9f8 white #ffffff pink #ffb3be --> Deixar a cor base do app como branca e a parte de cima como azul e a debaixo como rosa,
//ou deixar as letras em branco
//Color GenderQueer/NonBinary yellow #ffff1a white #ffffff purple #b366ff black #333333

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
    Search: SearchScreen,
    Settings: SettingsScreen,
    UserOpinion: UserOpinionScreen,
    Register2: RegisterScreen2,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

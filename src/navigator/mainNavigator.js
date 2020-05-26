import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList52813Navigator from '../features/ArticleList52813/navigator';
import ArticleList52812Navigator from '../features/ArticleList52812/navigator';
import ArticleList52811Navigator from '../features/ArticleList52811/navigator';
import ArticleList52779Navigator from '../features/ArticleList52779/navigator';
import ArticleList52778Navigator from '../features/ArticleList52778/navigator';
import ArticleList52777Navigator from '../features/ArticleList52777/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList52813: { screen: ArticleList52813Navigator },
ArticleList52812: { screen: ArticleList52812Navigator },
ArticleList52811: { screen: ArticleList52811Navigator },
ArticleList52779: { screen: ArticleList52779Navigator },
ArticleList52778: { screen: ArticleList52778Navigator },
ArticleList52777: { screen: ArticleList52777Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList185833Navigator from '../features/NotificationList185833/navigator';
import Settings185832Navigator from '../features/Settings185832/navigator';
import Settings185824Navigator from '../features/Settings185824/navigator';
import UserProfile185822Navigator from '../features/UserProfile185822/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList185833: { screen: NotificationList185833Navigator },
Settings185832: { screen: Settings185832Navigator },
Settings185824: { screen: Settings185824Navigator },
UserProfile185822: { screen: UserProfile185822Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

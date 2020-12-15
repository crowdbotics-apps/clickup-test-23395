import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile185862Navigator from '../features/UserProfile185862/navigator';
import Tutorial185861Navigator from '../features/Tutorial185861/navigator';
import NotificationList185833Navigator from '../features/NotificationList185833/navigator';
import Settings185832Navigator from '../features/Settings185832/navigator';
import Settings185824Navigator from '../features/Settings185824/navigator';
import UserProfile185822Navigator from '../features/UserProfile185822/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile185862: { screen: UserProfile185862Navigator },
Tutorial185861: { screen: Tutorial185861Navigator },
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

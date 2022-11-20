import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';

const Tab = createBottomTabNavigator();

function MyTabs({TestScreen, TestScreen1}) {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Test" component={TestScreen} />
      <Tab.Screen name="Test1" component={TestScreen1} />
    </Tab.Navigator>
  );
}

// function withBottomTabs(Component) {
//     return
// }

export default MyTabs;

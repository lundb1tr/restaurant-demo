import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './src/screens/SearchScreen';
import ResultsShow from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search,
    ResultsShow,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);

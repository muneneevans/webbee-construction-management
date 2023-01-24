// In App.js in a new project

import * as React from 'react';
import Dashboard from 'screens/Dashboard/Dashboard';
import Categories from 'src/Screens/Categories/Categories';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';
import {getTheme} from 'src/Store/Configuration/selectors';
import {ThemeProvider} from 'styled-components';

type RootDrawerParamList = {
  Dashboard: {
    title: string;
  };
  Categories: {
    title: string;
  };
};

// const Stack = createNativeStackNavigator<RootDrawerParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();
// const Drawer = createDrawerNavigator();
function App() {
  const theme = useSelector(getTheme, shallowEqual);
  const dimensions = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        }}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Categories" component={Categories} />
      </Drawer.Navigator>
    </ThemeProvider>
  );
}

export default App;

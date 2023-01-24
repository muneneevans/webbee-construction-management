// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from 'screens/Dashboard/Dashboard';
import Categories from 'src/Screens/Categories/Categories';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

// type RootDrawerParamList = {
//   Dashboard: {
//     title: string;
//   };
//   Categories: {
//     title: string;
//   };
// };

// const Stack = createNativeStackNavigator<RootDrawerParamList>();
// const Drawer = createDrawerNavigator<RootDrawerParamList>();
// const Drawer = createDrawerNavigator();
function App() {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Dashboard" component={Dashboard} />
    //   <Drawer.Screen name="Categories" component={Categories} />
    // </Drawer.Navigator>
    <View>
      <Text>Routes</Text>
    </View>
  );
}

export default App;

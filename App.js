// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const Stack = createNativeStackNavigator();

// const App =()=> {
//   return (
//    <View>
//     <HomeScreen/>
//     </View>
//   );
// }

// export default App;

// // In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './src/component/HomeScreen';
import One from './src/component/One';
import Two from './src/component/Two';
import Three from './src/component/Three';
import Four from './src/component/Four';
import Five from './src/component/Five';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="One" component={One} options={{ headerShown: false }} />
        <Stack.Screen name="Two" component={Two} options={{ headerShown: false }} />
        <Stack.Screen name="Three" component={Three} options={{ headerShown: false }} />
        <Stack.Screen name="Four" component={Four} options={{ headerShown: false }} />
        <Stack.Screen name="Five" component={Five} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ... DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45,85)',
    background: 'rgb(15, 15, 15)',
    dark: true,
  }
}

export default function App() {
  return (
    // Using Native Stack to allow for multiple 'screens/windows' in the app
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>


      </Stack.Navigator>


    </NavigationContainer>
  );
}

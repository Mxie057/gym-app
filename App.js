import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import Settings from './screens/Settings';
import Plans from './screens/Plans';
import Icon from 'react-native-vector-icons/Ionicons';  


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator  screenOptions={{
        tabBarActiveTintColor: "yrgb(255, 165, 0)",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          height: 80,
          backgroundColor: 'rgb(15, 15, 15)',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
        },
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="home-outline"
              size={20}
              color={tabInfo.focused ? "yrgb(255, 165, 0)" : "#FFF"}
            />
          ); 
        },
      }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Workout" component={WorkoutScreen}/>
        <Tab.Screen name="Plans" component={Plans}/>
        <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CharacterCreationScreen from "./screens/CharacterCreationScreen";
import ResumeScreen from "./screens/ResumeScreen";
import LevelScreen from "./screens/LevelScreen";
import ContactScreen from "./screens/ContactScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {AudioProvider} from "./components/AudioProvider";
import {ThemeProvider} from "./components/ThemeProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CharacterCreation" component={CharacterCreationScreen} />
            <Stack.Screen name="Resume" component={ResumeScreen} />
            <Stack.Screen name="Level" component={LevelScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AudioProvider>
    </ThemeProvider>
  );
}

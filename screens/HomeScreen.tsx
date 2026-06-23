import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Fonts, Colors } from '../constants/theme';
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { VT323_400Regular } from '@expo-google-fonts/vt323';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import { GameButton } from '../components/UI/GameButton';
import { OutlinedText } from '../components/UI/OutlinedText';
import { SpriteAnimator } from '../components/UI/SpriteAnimator';
import { useTheme } from "../components/ThemeProvider";

type HomeScreenProps = {
    navigation: any
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const { theme, toggleTheme } = useTheme();
  const colors = Colors[theme];

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    VT323_400Regular,
  });

  if (!fontsLoaded) return null;

  function handleCharacterCreation() {
    navigation.navigate("CharacterCreation");
  }

  function handleResume() {
    navigation.navigate("Resume");
  }

  function handleLevels() {
    navigation.navigate("Level");
  }

  function handleContact() {
    navigation.navigate("Contact");
  }

  function handleOptions() {
    navigation.navigate("Settings");
  }

  return (
    <LinearGradient
      colors={[colors.backgroundA, colors.backgroundB]}
      style={styles.background}
    >
      
      <View style={styles.spriteBackground}>
        <SpriteAnimator
          source={require("../assets/Jump.png")}
          frameWidth={256}
          frameHeight={256}
          columns={4}
          frameCount={16}
          fps={23}
          animateHorizontal={true}
        />
      </View>

      <View style={styles.container}>

        <OutlinedText style={styles.name}>Ryan Vincoy</OutlinedText>
        <GameButton label = "Character Creation" labelHovered = "About Me" onPress = {handleCharacterCreation} />
        <GameButton label = "Levels" labelHovered = "Project History" onPress = {handleLevels} />
        <GameButton label = "Resume" labelHovered = "Resumé" onPress = {handleResume} />
        <GameButton label = "Info" labelHovered = "Contact Info" onPress = {handleContact} />
        <GameButton label = "Options" labelHovered = "Settings" onPress = {handleOptions} />
        <StatusBar style="auto" />

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spriteBackground: {
    transform: [{ scale: 3}],
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 60,
    fontFamily: Fonts.menu,
    color: Colors.dark.title,
    marginBottom: 40,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
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
  navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  const nameStyle = {
    ...styles.name,
    fontSize: isMobile ? 40 : 60,
    marginBottom: isMobile ? 20 : 40,
  };

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    VT323_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={[colors.backgroundA, colors.backgroundB]}
      style={styles.background}
    >
      {/* Animated Background Sprite */}
      <View
        style={[
          styles.spriteBackground,
          {
            transform: [{ scale: isMobile ? 1.5 : 3 }],
          },
        ]}
      >
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

      {/* Main Content */}
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: isMobile ? 10 : 0,
            paddingTop: isMobile ? 40 : 0,
          },
        ]}
      >
        <OutlinedText style={nameStyle}>Ryan Vincoy</OutlinedText>

        <GameButton
          label="Character Creation"
          labelHovered="About Me"
          onPress={() => navigation.navigate("CharacterCreation")}
        />
        <GameButton
          label="Levels"
          labelHovered="Project History"
          onPress={() => navigation.navigate("Level")}
        />
        <GameButton
          label="Resume"
          labelHovered="Resumé"
          onPress={() => navigation.navigate("Resume")}
        />
        <GameButton
          label="Info"
          labelHovered="Contact Info"
          onPress={() => navigation.navigate("Contact")}
        />
        <GameButton
          label="Options"
          labelHovered="Settings"
          onPress={() => navigation.navigate("Settings")}
        />

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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  spriteBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontFamily: Fonts.menu,
    color: Colors.dark.title,
  },
});

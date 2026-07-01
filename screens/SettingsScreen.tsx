import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";
import { GameButton } from "../components/UI/GameButton";
import { Colors, Fonts } from "../constants/theme";
import { SpriteAnimator } from "../components/UI/SpriteAnimator";
import { useTheme } from "../components/ThemeProvider";
import Slider from "@react-native-community/slider";
import { useAudio } from "../components/AudioProvider";

type SettingsScreenProps = {
  navigation: any;
};

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  const { theme, toggleTheme } = useTheme();
  const colors = Colors[theme];
  const { musicVolume, setMusicVolume, playMusic, stopMusic } = useAudio();
  const [music, toggleMusic] = useState(true);

  const { width: screenWidth } = useWindowDimensions();
  const isMobile = screenWidth < 600;

  function handleBack() {
    navigation.navigate("Home");
  }

  function musicButton() {
    if (music) {
      playMusic();
    } else {
      stopMusic();
    }
    toggleMusic(!music);
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundB,
          paddingVertical: isMobile ? 20 : 10,
          paddingHorizontal: isMobile ? 10 : 0,
        },
      ]}
    >
      {/* Title */}
      <Text
        style={[
          styles.textTitle,
          {
            color: colors.ccText,
            fontSize: isMobile ? 20 : 25,
            marginBottom: isMobile ? 10 : 20,
          },
        ]}
      >
        Settings:
      </Text>

      {/* Theme Toggle */}
      <GameButton
        label={theme === "dark" ? "Light Mode" : "Dark Mode"}
        labelHovered={theme === "dark" ? "Light Mode" : "Dark Mode"}
        size="small"
        onPress={toggleTheme}
      />

      {/* Volume Slider */}
      <Slider
        value={musicVolume}
        onValueChange={setMusicVolume}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        style={{
          width: isMobile ? screenWidth * 0.8 : 300,
          height: 40,
          marginVertical: isMobile ? 10 : 20,
        }}
        minimumTrackTintColor={colors.text}
        maximumTrackTintColor="#555"
        thumbTintColor={colors.text}
      />

      {/* Music Toggle */}
      <GameButton
        label={music ? "Play Music" : "Stop Music"}
        labelHovered={music ? "Play Music" : "Stop Music"}
        size="small"
        onPress={musicButton}
      />

      {/* Sprite Animation */}
      <View
        style={{
          transform: [{ scale: isMobile ? 1 : 1.4 }],
          marginVertical: isMobile ? 20 : 10,
        }}
      >
        <SpriteAnimator
          source={require("../assets/Walk.png")}
          frameWidth={256}
          frameHeight={256}
          columns={2}
          frameCount={4}
          fps={4}
          animateHorizontal={true}
        />
      </View>

      {/* Back Button */}
      <GameButton
        label="Back"
        labelHovered="To Menu"
        onPress={handleBack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
  },
});

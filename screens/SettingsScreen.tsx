import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { GameButton } from "../components/UI/GameButton";
import { Colors, Fonts } from "../constants/theme";
import { SpriteAnimator } from '../components/UI/SpriteAnimator';
import { useTheme } from "../components/ThemeProvider";
import Slider from "@react-native-community/slider";
import { useAudio } from "../components/AudioProvider";

type SettingsScreenProps = {
    navigation: any
}

export default function SettingsScreen({ navigation }: SettingsScreenProps) {

    const { theme, toggleTheme } = useTheme();
    const colors = Colors[theme];
    const { musicVolume, setMusicVolume, playMusic, stopMusic } = useAudio();
    const [music, toggleMusic] = useState(true);

    function handleBack() {
        navigation.navigate("Home");
    }

    function musicButton() {
        if(music){
            playMusic();
        } else {
            stopMusic();
        }
        toggleMusic(!music)
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundB }]}>
            <Text style={[styles.textTitle, { color: colors.ccText }]}>Settings:</Text>

            <Text style={[styles.text, { color: colors.ccText }]}></Text>

            <GameButton
                label={theme === "dark" ? "Light Mode" : "Dark Mode"}
                labelHovered={theme === "dark" ? "Light Mode" : "Dark Mode"}
                size="small"
                onPress={toggleTheme}
            />

            <Slider
                value={musicVolume}
                onValueChange={setMusicVolume}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                style={{ width: 250, height: 40 }}
                minimumTrackTintColor={colors.text}
                maximumTrackTintColor="#555"
                thumbTintColor={colors.text}
            />

            <GameButton 
                label={music === true ? "Play Music" : "Stop Music"}
                labelHovered={music === true ? "Play Music" : "Stop Music"}
                size="small"
                onPress={musicButton}
            />

            <SpriteAnimator
                source={require("../assets/Walk.png")}
                frameWidth={256}
                frameHeight={256}
                columns={2}
                frameCount={4}
                fps={4}
                animateHorizontal={true}
            />

            <GameButton label="Back" labelHovered="To Menu" onPress={handleBack}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
    },
  textTitle: {
    fontSize: 25,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 10,
  },
  text: {
    color: Colors.dark.ccText,
    fontFamily: Fonts.menu,
    fontSize: 20,
  },
});
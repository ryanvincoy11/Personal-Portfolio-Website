import { View, StyleSheet } from "react-native";
import { Colors } from '../constants/theme';
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { GameButton } from '../components/UI/GameButton';
import { useRef, useState } from 'react';
import Character from "../components/CharacterCreation/Character";
import About from "../components/CharacterCreation/About";
import Attributes from "../components/CharacterCreation/Attributes";
import Skills from "../components/CharacterCreation/Skills";

type CharacterCreationScreenProps = {
    navigation: any
}

export default function CharacterCreationScreen({ navigation }: CharacterCreationScreenProps) {
  const [selectedMenu, setSelectedMenu] = useState("Character");

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) return null;
  
  return (
    <View style={styles.container}>

      <View style={styles.menubar}>

        <View style={styles.topSection}>
          <GameButton label = "Character" labelHovered = "Character" 
          onPress = {() => setSelectedMenu("Character")} size = "small" 
          selected = {selectedMenu === "Character"}
          />
          <GameButton label = "About" labelHovered = "About" 
          onPress = {() => setSelectedMenu("About")} size = "small" 
          selected = {selectedMenu === "About"}
          />
          <GameButton label = "Attributes" labelHovered = "Attributes" 
          onPress = {() => setSelectedMenu("Attributes")} size = "small" 
          selected = {selectedMenu === "Attributes"}
          />
          <GameButton label = "Skills" labelHovered = "Skills" 
          onPress = {() => setSelectedMenu("Skills")} size = "small" 
          selected = {selectedMenu === "Skills"}
          />
        </View>

        <View style={styles.bottomSection}>
          <GameButton label = "Back" labelHovered = "To Menu" 
          onPress = {() => navigation.navigate("Home")} size = "small" />
          <GameButton label = "Next" labelHovered = "To Levels" 
          onPress = {() => navigation.navigate("Level")} size = "small" />
        </View>

      </View>

      <View style={styles.nonmenubar}>
        {selectedMenu === "Character" && <Character />}
        {selectedMenu === "About" && <About />}
        {selectedMenu === "Attributes" && <Attributes />}
        {selectedMenu === "Skills" && <Skills />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  menubar: {
    width: 150,
    backgroundColor: Colors.dark.backgroundA,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSection: {
    gap: 10,
  },
  bottomSection: {
    gap: 10,
  },
  nonmenubar: {
    flex: 1,
    backgroundColor: Colors.dark.backgroundB,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

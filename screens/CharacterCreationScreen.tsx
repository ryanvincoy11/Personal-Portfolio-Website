import { View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { Colors } from '../constants/theme';
import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { GameButton } from '../components/UI/GameButton';
import { useState } from 'react';
import Character from "../components/CharacterCreation/Character";
import About from "../components/CharacterCreation/About";
import Attributes from "../components/CharacterCreation/Attributes";
import Skills from "../components/CharacterCreation/Skills";
import { useTheme } from "../components/ThemeProvider";

type CharacterCreationScreenProps = {
  navigation: any;
};

export default function CharacterCreationScreen({ navigation }: CharacterCreationScreenProps) {
  const [selectedMenu, setSelectedMenu] = useState("Character");
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 700;

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: isMobile ? "column" : "row",
        },
      ]}
    >
      {/* Sidebar Menu */}
      <View
        style={[
          styles.menubar,
          {
            backgroundColor: colors.backgroundA,
            width: isMobile ? "100%" : 180,
            flexDirection: isMobile ? "row" : "column",
            justifyContent: isMobile ? "center" : "space-between",
            paddingVertical: isMobile ? 10 : 20,
            gap: isMobile ? 10 : 0,
          },
        ]}
      >
        {/* Top Section */}
        <View
          style={[
            styles.topSection,
            {
              flexDirection: isMobile ? "row" : "column",
              gap: isMobile ? 10 : 12,
            },
          ]}
        >
          <GameButton
            label="Character"
            labelHovered="Character"
            onPress={() => setSelectedMenu("Character")}
            size="small"
            selected={selectedMenu === "Character"}
          />
          <GameButton
            label="About"
            labelHovered="About"
            onPress={() => setSelectedMenu("About")}
            size="small"
            selected={selectedMenu === "About"}
          />
          <GameButton
            label="Attributes"
            labelHovered="Attributes"
            onPress={() => setSelectedMenu("Attributes")}
            size="small"
            selected={selectedMenu === "Attributes"}
          />
          <GameButton
            label="Skills"
            labelHovered="Skills"
            onPress={() => setSelectedMenu("Skills")}
            size="small"
            selected={selectedMenu === "Skills"}
          />
        </View>

        {/* Bottom Section */}
        <View
          style={[
            styles.bottomSection,
            {
              flexDirection: isMobile ? "row" : "column",
              gap: isMobile ? 10 : 12,
            },
          ]}
        >
          <GameButton
            label="Back"
            labelHovered="To Menu"
            onPress={() => navigation.navigate("Home")}
            size="small"
          />
          <GameButton
            label="Next"
            labelHovered="To Levels"
            onPress={() => navigation.navigate("Level")}
            size="small"
          />
        </View>
      </View>

      {/* Content Area */}
      <ScrollView
        style={[
          styles.nonmenubar,
          {
            backgroundColor: colors.backgroundB,
            padding: isMobile ? 10 : 20,
          },
        ]}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 40,
        }}
      >
        {selectedMenu === "Character" && <Character />}
        {selectedMenu === "About" && <About />}
        {selectedMenu === "Attributes" && <Attributes />}
        {selectedMenu === "Skills" && <Skills />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menubar: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  topSection: {
    marginTop: 10,
  },
  bottomSection: {
    marginBottom: 10,
  },
  nonmenubar: {
    flex: 1,
  },
});

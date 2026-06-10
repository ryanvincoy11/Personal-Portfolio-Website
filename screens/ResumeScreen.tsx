import { View, Text, StyleSheet, Image } from "react-native";
import { GameButton } from "../components/UI/GameButton";
import { Hyperlink } from "../components/UI/Hyperlink";
import { Colors, Fonts } from "../constants/theme";
import { Platform } from "react-native";

type ResumeScreenProps = {
    navigation: any
}

export default function ResumeScreen({ navigation }: ResumeScreenProps) {

  async function handleDownload() {
    if (Platform.OS === "web") {
      const link = document.createElement("a");
      link.href = "/RyanVincoyResume.pdf";
      link.download = "RyanVincoyResume.pdf";
      link.click();
      return;
    }
  }

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>Resume:</Text>

      
        <Image
          source={require("../assets/RyanVincoyResume.png")}
          style={styles.resumeImage}
          resizeMode="contain"
        />

      {/* BOTTOM BAR */}
      <View style={styles.bottomBar}>

        {/* BACK BUTTON */}
        <GameButton
          label="Back"
          labelHovered="To Menu"
          size="small"
          onPress={() => navigation.navigate("Home")}   // or CharacterCreation
        />

        {/* DOWNLOAD LINK */}
        <Hyperlink
          label="Download"
          size={20}
          onPress={() => {handleDownload()}}
        />

        {/* NEXT BUTTON */}
        <GameButton
          label="Next"
          labelHovered="To Contact"
          size="small"
          onPress={() => navigation.navigate("Contact")}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.backgroundB,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: Fonts.menu,
    fontSize: 28,
    color: Colors.dark.ccText,
    textDecorationLine: "underline",
    marginBottom: 20,
  },

  resumeImage: {
    width: "70%",
    height: "80%",
    aspectRatio: 1,   // adjust based on your resume PNG
  },

  bottomBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

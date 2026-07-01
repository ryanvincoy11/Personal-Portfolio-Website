import { View, Text, StyleSheet, Image, useWindowDimensions, Platform } from "react-native";
import { GameButton } from "../components/UI/GameButton";
import { Hyperlink } from "../components/UI/Hyperlink";
import { Colors, Fonts } from "../constants/theme";
import { useTheme } from "../components/ThemeProvider";

type ResumeScreenProps = {
  navigation: any;
};

export default function ResumeScreen({ navigation }: ResumeScreenProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  async function handleDownload() {
    if (Platform.OS === "web") {
      const link = document.createElement("a");
      link.href = "/RyanVincoyResume.pdf";
      link.download = "RyanVincoyResume.pdf";
      link.click();
    }
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundB,
          paddingTop: isMobile ? 20 : 40,
          paddingBottom: isMobile ? 10 : 20,
        },
      ]}
    >
      {/* TITLE */}
      <Text
        style={[
          styles.title,
          {
            color: colors.ccText,
            fontSize: isMobile ? 22 : 28,
            marginBottom: isMobile ? 10 : 20,
          },
        ]}
      >
        Resume:
      </Text>

      {/* RESUME IMAGE */}
      <Image
        source={require("../assets/RyanVincoyResume.png")}
        resizeMode="contain"
        style={[
          styles.resumeImage,
          {
            width: isMobile ? "90%" : "70%",
            height: isMobile ? "65%" : "80%",
          },
        ]}
      />

      {/* BOTTOM BAR */}
      <View
        style={[
          styles.bottomBar,
          {
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 10 : 0,
            paddingHorizontal: isMobile ? 10 : 20,
            marginTop: isMobile ? 10 : 20,
          },
        ]}
      >
        <GameButton
          label="Back"
          labelHovered="To Menu"
          size="small"
          onPress={() => navigation.navigate("Home")}
        />

        <Hyperlink
          label="Download"
          size={isMobile ? 16 : 20}
          onPress={handleDownload}
        />

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
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: Fonts.menu,
    textDecorationLine: "underline",
  },

  resumeImage: {
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "black",
  },

  bottomBar: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { GameButton } from "../components/UI/GameButton";
import { Hyperlink } from "../components/UI/Hyperlink";
import { Colors, Fonts } from "../constants/theme";
import { SpriteAnimator } from '../components/UI/SpriteAnimator';
import { Linking } from "react-native";
import { useTheme } from "../components/ThemeProvider";

type ContactScreenProps = {
  navigation: any;
};

export default function ContactScreen({ navigation }: ContactScreenProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  const titleFont = isMobile ? 20 : 25;
  const textFont = isMobile ? 16 : 20;

  function handleBack() {
    navigation.navigate("Home");
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
      {/* Contact Info */}
      <View style={styles.nonBackButton}>
        <Text style={[styles.textTitle, { color: colors.ccText, fontSize: titleFont }]}>
          Contact Info:
        </Text>

        {/* Email */}
        <View
          style={[
            styles.linkContainer,
            { flexDirection: isMobile ? "column" : "row", alignItems: "center" },
          ]}
        >
          <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
            Email: vincoyrj@outlook.com
          </Text>
        </View>

        {/* LinkedIn */}
        <View
          style={[
            styles.linkContainer,
            { flexDirection: isMobile ? "column" : "row", alignItems: "center" },
          ]}
        >
          <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
            LinkedIn:
          </Text>
          <Hyperlink
            label="https://www.linkedin.com/in/ryan-vincoy-886596362/"
            size={isMobile ? 16 : 20}
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/ryan-vincoy-886596362/")
            }
          />
        </View>

        {/* GitHub */}
        <View
          style={[
            styles.linkContainer,
            { flexDirection: isMobile ? "column" : "row", alignItems: "center" },
          ]}
        >
          <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
            GitHub:
          </Text>
          <Hyperlink
            label="https://github.com/ryanvincoy11"
            size={isMobile ? 16 : 20}
            onPress={() => Linking.openURL("https://github.com/ryanvincoy11")}
          />
        </View>
      </View>

      {/* Sprite */}
      <View
        style={{
          transform: [{ scale: isMobile ? 1 : 1.4 }],
          marginVertical: isMobile ? 20 : 0,
        }}
      >
        <SpriteAnimator
          source={require("../assets/Soccer.png")}
          frameWidth={256}
          frameHeight={256}
          columns={3}
          frameCount={10}
          fps={10}
          animateHorizontal={false}
        />
      </View>

      {/* Back Button */}
      <View style={{ marginBottom: isMobile ? 20 : 10 }}>
        <GameButton label="Back" labelHovered="To Menu" onPress={handleBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkContainer: {
    marginVertical: 10,
  },
  nonBackButton: {
    alignItems: "center",
  },
  textTitle: {
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 10,
  },
  text: {
    fontFamily: Fonts.menu,
  },
});

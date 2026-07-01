import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';
import { useTheme } from "../ThemeProvider";

export default function Attributes() {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  const titleFont = isMobile ? 18 : 22;
  const textFont = isMobile ? 14 : 16;

  return (
    <View
      style={[
        styles.mainContainer,
        {
          flexDirection: isMobile ? "column" : "row",
          margin: isMobile ? 20 : 50,
          paddingHorizontal: isMobile ? 10 : 0,
        },
      ]}
    >
      {/* Sprite */}
      <View
        style={[
          styles.containerB,
          {
            transform: [{ scale: isMobile ? 1 : 1.5 }],
            marginRight: isMobile ? 0 : 50,
            marginBottom: isMobile ? 20 : 0,
          },
        ]}
      >
        <SpriteAnimator
          source={require("../../assets/MaddiCat.png")}
          frameWidth={256}
          frameHeight={256}
          columns={2}
          frameCount={3}
          fps={1}
          animateHorizontal={false}
        />
      </View>

      {/* Attributes Box */}
      <View
        style={[
          styles.container,
          {
            margin: isMobile ? 20 : 50,
            padding: isMobile ? 10 : 20,
          },
        ]}
      >
        <Text style={[styles.textTitle, { color: colors.ccText, fontSize: titleFont }]}>
          Attributes:
        </Text>

        {[
          "Persistent",
          "Accountable",
          "Quick Learner",
          "People Person",
          "Excellent Adapter",
          "Enjoys a challenge",
          "Works well in a group",
          "Works well individually",
          "Thrives through feedback",
          "Astute attention to detail",
          "Interested in learning new tech",
        ].map((attr, i) => (
          <Text
            key={i}
            style={[styles.text, { color: colors.ccText, fontSize: textFont }]}
          >
            {attr}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  containerB: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    marginBottom: 10,
  },
  text: {
    fontFamily: Fonts.menu,
    marginVertical: 6,
  },
});

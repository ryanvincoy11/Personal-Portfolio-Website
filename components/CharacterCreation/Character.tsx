import { View, Image, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';
import { useTheme } from "../ThemeProvider";

export default function Character() {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  const titleFont = isMobile ? 18 : 22;

  return (
    <View
      style={[
        styles.mainContainer,
        {
          flexDirection: isMobile ? "column" : "row",
          transform: [{ scale: isMobile ? 1 : 1.1 }],
          paddingVertical: isMobile ? 20 : 0,
        },
      ]}
    >
      {/* Character Info */}
      <View
        style={[
          styles.container,
          {
            marginBottom: isMobile ? 20 : 0,
          },
        ]}
      >
        <Text style={[styles.textTitle, { color: colors.ccText, fontSize: titleFont }]}>
          Character Name: Ryan Vincoy
        </Text>

        <Image
          style={[
            styles.photo,
            {
              width: isMobile ? screenWidth * 0.8 : 400,
              height: isMobile ? screenWidth * 1.0 : 500,
            },
          ]}
          source={require('../../assets/RyanPhoto.png')}
        />
      </View>

      {/* Sprite Animation */}
      <View
        style={[
          styles.containerB,
          {
            transform: [{ scale: isMobile ? 1 : 1.5 }],
            marginTop: isMobile ? 20 : 0,
          },
        ]}
      >
        <SpriteAnimator
          source={require("../../assets/Wave.png")}
          frameWidth={256}
          frameHeight={256}
          columns={4}
          frameCount={17}
          fps={10}
          animateHorizontal={false}
        />
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
    justifyContent: "center",
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
    margin: 10,
  },
  photo: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: 10,
    resizeMode: "cover",
  },
});

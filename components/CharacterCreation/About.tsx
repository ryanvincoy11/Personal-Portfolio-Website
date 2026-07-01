import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';
import { Hyperlink } from "../UI/Hyperlink";
import { useState } from 'react';
import { useTheme } from "../ThemeProvider";

export default function About() {
  const [selectedMore, setSelectedMore] = useState(false);
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  const titleFont = isMobile ? 18 : 22;
  const textFont = isMobile ? 14 : 16;
  const textFont2 = isMobile ? 18 : 25;

  function handleHyper() {
    setSelectedMore(!selectedMore);
  }

  function nonMore() {
    return (
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
          About Character:
        </Text>

        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Class: Software Engineer
        </Text>
        <View style={[styles.divider, { width: isMobile ? "90%" : "80%" }]} />

        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Academy: University of Illinois Chicago
        </Text>
        <View style={[styles.divider, { width: isMobile ? "90%" : "80%" }]} />

        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Level: Incoming Senior
        </Text>
        <View style={[styles.divider, { width: isMobile ? "90%" : "80%" }]} />

        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Achievements: Deans List (Fall 2024,
        </Text>
        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Spring 2025, Fall 2025, Spring 2026),
        </Text>
        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          iGrow Scholarship, Illinois State Scholar
        </Text>
        <View style={[styles.divider, { width: isMobile ? "90%" : "80%" }]} />

        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Disciplines: Software Engineering, Software
        </Text>
        <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>
          Design, Computer Algorithms, Data Structures
        </Text>

        <Hyperlink label="More..." onPress={handleHyper} size={isMobile ? 18 : 20} />
      </View>
    );
  }

  function more() {
    return (
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
          About Character:
        </Text>

        {[
          "Ryan Vincoy is an aspiring",
          "Software Engineer. He is",
          "currently pursuing a bachelor's",
          "degree at the University of",
          "Illinois Chicago and is currently",
          "an incoming senior. Through hard",
          "work he has maintained a 3.92/4.00",
          "GPA through advanced CS classes such as",
          "Software Engineering, Data Structures,",
          "and more. This has allowed Ryan to make",
          "the Dean's List every semester",
          "since he began his college career."
        ].map((line, i) => (
          <Text
            key={i}
            style={[styles.text2, { color: colors.ccText, fontSize: textFont2 }]}
          >
            {line}
          </Text>
        ))}

        <Hyperlink label="Back..." onPress={handleHyper} size={isMobile ? 18 : 20} />
      </View>
    );
  }

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
      {selectedMore ? more() : nonMore()}

      <View
        style={[
          styles.containerB,
          {
            transform: [{ scale: isMobile ? 1 : 1.5 }],
            margin: isMobile ? 20 : 50,
          },
        ]}
      >
        <SpriteAnimator
          source={require("../../assets/PowerBallSprite.png")}
          frameWidth={256}
          frameHeight={256}
          columns={3}
          frameCount={12}
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
  text2: {
    fontFamily: Fonts.description,
    marginVertical: 6,
  },
  divider: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 10,
  },
});

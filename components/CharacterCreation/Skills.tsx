import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';
import { useTheme } from "../ThemeProvider";


export default function Skills() {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 600;

  const titleFont = isMobile ? 18 : 22;
  const textFont = isMobile ? 14 : 16;
  
    return(
        <View style={[
          styles.mainContainer,
          {
            flexDirection: isMobile ? "column" : "row",
            margin: isMobile ? 20 : 50,
            paddingHorizontal: isMobile ? 10 : 0,
          },
        ]}>

            <View style={[
              styles.container,
              {
                margin: isMobile ? 20 : 50,
                padding: isMobile ? 10 : 20,
              },
            ]}>
                <Text style={[styles.text, { color: colors.ccText }]}></Text>
                <Text  style={[styles.textTitle, { color: colors.ccText, fontSize: titleFont }]}>Skills:</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Languages: Java, C++, Python, C#,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>TypeScript, SQL, F#, GO, C </Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Front-End: React Native, Unity UI, JavaFX</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Testing: JUnit5, Google Tests, NUnit</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Paradigms: OOP, Declarative,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Functional, Event-Driven, Concurrent</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>SW Engr: Agile Development, Scrum,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Version Control (Git), Design Patterns,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>UML Class Diagrams, Wireframing</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Data Analysis: SQLite3, Matplotlib,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>CSV Processing, Data Visualization</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Networking: Concurrent Programming,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Socket Programming, REST APIs</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Hardware: Breadboard Circuit Design,</Text>
                <Text style={[styles.text, { color: colors.ccText, fontSize: textFont }]}>Arduino Microcontroller Programming</Text>
                <Text style={[styles.text, { color: colors.ccText }]}></Text>
            </View>




            <View style={[
              styles.containerB,
              {
                transform: [{ scale: isMobile ? 1 : 1.5 }],
                marginLeft: isMobile ? 0 : 50,
                marginTop: isMobile ? 20 : 0,
              },
            ]}>
                <SpriteAnimator
                    source={require("../../assets/Pokeball.png")}
                    frameWidth={256}
                    frameHeight={256}
                    columns={3}
                    frameCount={9}
                    fps={7}
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
  divider: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
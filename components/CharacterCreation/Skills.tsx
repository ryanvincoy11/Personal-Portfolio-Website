import { View, Text, StyleSheet } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';


export default function Skills() {
    return(
        <View style={styles.mainContainer}>


            <View style={styles.container}>
                <Text style={styles.text}></Text>
                <Text style={styles.textTitle}>Skills:</Text>
                <Text style={styles.text}>Languages: Java, C++, Python, C#,</Text>
                <Text style={styles.text}>TypeScript, SQL, F#, GO, C </Text>
                <View style={styles.divider} />
                <Text style={styles.text}>Front-End: React Native, Unity UI, JavaFX</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>Testing: JUnit5, Google Tests, NUnit</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>Paradigms: OOP, Declarative,</Text>
                <Text style={styles.text}>Functional, Event-Driven, Concurrent</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>SW Engr: Agile Development, Scrum,</Text>
                <Text style={styles.text}>Version Control (Git), Design Patterns,</Text>
                <Text style={styles.text}>UML Class Diagrams, Wireframing</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>Data Analysis: SQLite3, Matplotlib,</Text>
                <Text style={styles.text}>CSV Processing, Data Visualization</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>Networking: Concurrent Programming,</Text>
                <Text style={styles.text}>Socket Programming, REST APIs</Text>
                <View style={styles.divider} />
                <Text style={styles.text}>Hardware: Breadboard Circuit Design,</Text>
                <Text style={styles.text}>Arduino Microcontroller Programming</Text>
                <Text style={styles.text}></Text>
            </View>


            <View style={styles.containerB}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  containerB: {
    transform: [{ scale: 1.5}],
    marginLeft: 50,
    marginBottom: 0,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  textTitle: {
    color: Colors.dark.ccText,
    fontSize: 20,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 5,
  },
  text: {
    color: Colors.dark.ccText,
    fontFamily: Fonts.menu,
    margin: 5,
    fontSize: 15,
  },
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 10,
  },
});

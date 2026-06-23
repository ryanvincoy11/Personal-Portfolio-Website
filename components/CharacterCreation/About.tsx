import { View, Text, StyleSheet } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';
import { Hyperlink } from "../UI/Hyperlink";
import { useState } from 'react';
import { useTheme } from "../ThemeProvider";

export default function About() {
    const [selectedMore, setSelectedMore] = useState(false);
    const { theme } = useTheme();
    const colors = Colors[theme];
 
    function handleHyper() {
        setSelectedMore(!selectedMore);
    }

    function nonMore() {
        return(
            <View style={styles.container}>
                <Text style={[styles.textTitle, { color: colors.ccText }]}>About Character:</Text>
                <Text style={[styles.text, { color: colors.ccText }]}>Class: Software Engineer</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText }]}>Academy: University of Illinois Chicago</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText }]}>Level: Incoming Senior</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText }]}>Achievements: Deans List (Fall 2024,</Text>
                <Text style={[styles.text, { color: colors.ccText }]}>Spring 2025, Fall 2025, Spring 2026),</Text>
                <Text style={[styles.text, { color: colors.ccText }]}>iGrow Scholarship, Illinois State Scholar</Text>
                <View style={styles.divider} />
                <Text style={[styles.text, { color: colors.ccText }]}>Disciplines: Software Engineering, Software</Text>
                <Text style={[styles.text, { color: colors.ccText }]}>Design, Computer Algorithms, Data Structures</Text>
                <Hyperlink 
                label="More..."
                onPress = {handleHyper}
                size = {20}
               />
               <Text style={styles.text}></Text>
            </View>
        );
    }

    function more() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}></Text>
                <Text style={[styles.textTitle, { color: colors.ccText }]}>About Character:</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>Ryan Vincoy is an aspiring</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>Software Engineer. He is</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>currently pursuing a bachelor's</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>degree at the University of</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>Illinois Chicago and is currently</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>an incoming senior. Through hard</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>work he has maintained a 3.92/4.00</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>GPA through advanced CS classes such as</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>Software Engineering, Data Strucutres, </Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>and more. This has allowed Ryan to make</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>the Dean's List every semester</Text>
                <Text style={[styles.text2, { color: colors.ccText }]}>since he began his college career.</Text>
                <Hyperlink 
                label="Back..."
                onPress = {handleHyper}
                size = {20}
               />
               <Text style={styles.text}></Text>
            </View>
        );
    }

    return(
        <View style={styles.mainContainer}>
            {selectedMore === false && nonMore()}
            {selectedMore === true && more()}
            <View style={styles.containerB}>
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
    margin: 50,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scale: 1.1}],
  },
  textTitle: {
    fontSize: 20,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 5,
  },
  text: {
    fontFamily: Fonts.menu,
    margin: 10,
    fontSize: 15,
  },
  text2: {
    fontFamily: Fonts.description,
    margin: 10,
    fontSize: 25,
  },
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 10,
  },
});

import { View, Text, StyleSheet } from "react-native";
import { GameButton } from "../components/UI/GameButton";
import { Hyperlink } from "../components/UI/Hyperlink";
import { Colors, Fonts } from "../constants/theme";
import { SpriteAnimator } from '../components/UI/SpriteAnimator';
import { Linking } from "react-native";
import { useTheme } from "../components/ThemeProvider";

type ContactScreenProps = {
    navigation: any
}

export default function ContactScreen({ navigation }: ContactScreenProps) {
    const { theme, toggleTheme } = useTheme();
    const colors = Colors[theme];

    function handleBack() {
        navigation.navigate("Home");
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.backgroundB}]}>
            <View style={styles.nonBackButton}>
                <Text style={[styles.textTitle, { color: colors.ccText}]}>Contact Info:</Text>

                <View style={styles.linkContainer}>
                    <Text style={[styles.text, { color: colors.ccText}]}>Email: vincoyrj@outlook.com</Text>
                </View>

                <View style={styles.linkContainer}>
                    <Text style={[styles.text, { color: colors.ccText}]}>LinkedIn: </Text>
                    <Hyperlink
                    label="https://www.linkedin.com/in/ryan-vincoy-886596362/"
                    size={20}
                    onPress={() => Linking.openURL("https://www.linkedin.com/in/ryan-vincoy-886596362/")}
                    />
                </View>

                <View style={styles.linkContainer}>
                    <Text style={[styles.text, { color: colors.ccText}]}>GitHub: </Text>
                    <Hyperlink
                    label="https://github.com/ryanvincoy11"
                    size={20}
                    onPress={() => Linking.openURL("https://github.com/ryanvincoy11")}
                    />
                </View>
            </View>

            <SpriteAnimator
                source={require("../assets/Soccer.png")}
                frameWidth={256}
                frameHeight={256}
                columns={3}
                frameCount={10}
                fps={10}
                animateHorizontal={false}
            />

            <GameButton label="Back" labelHovered="To Menu" onPress={handleBack}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
    },
  linkContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  nonBackButton: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 10,
  },
  text: {
    fontFamily: Fonts.menu,
    fontSize: 20,
  },
});
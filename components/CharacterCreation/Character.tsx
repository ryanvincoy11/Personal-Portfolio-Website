import { View, Image, Text, StyleSheet } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';

export default function Character() {

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Character Name: Ryan Vincoy</Text>
                <Image
                    style={styles.photo}
                    source={require('../../assets/MeAndMaddi2.png')}
                />
            </View>
            <View style={styles.containerB}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerB: {
    transform: [{ scale: 1.5}],
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scale: 1.1}],
  },
  textTitle: {
    color: Colors.dark.ccText,
    fontSize: 20,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 10,
  },
  photo: {
    width: 400,
    height: 500,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  text: {
    color: Colors.dark.ccText,
    fontFamily: Fonts.menu,
    margin: 5,
    fontSize: 10,
  },
});

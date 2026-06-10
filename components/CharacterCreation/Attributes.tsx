import { View, Text, StyleSheet } from "react-native";
import { Fonts, Colors } from '../../constants/theme';
import { SpriteAnimator } from '../../components/UI/SpriteAnimator';

export default function Attributes() {
    return(
        <View style={styles.mainContainer}>

            <View style={styles.containerB}>
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

            <View style={styles.container}>
                <Text style={styles.text}></Text>
                <Text style={styles.textTitle}>Attributes:</Text>
                <Text style={styles.text}>Persistent</Text>
                <Text style={styles.text}>Accountable</Text>
                <Text style={styles.text}>Quick Learner</Text>
                <Text style={styles.text}>People Person</Text>
                <Text style={styles.text}>Excellent Adapter</Text>
                <Text style={styles.text}>Enjoys a challenge</Text>
                <Text style={styles.text}>Works well in a group</Text>
                <Text style={styles.text}>Works well individually</Text>
                <Text style={styles.text}>Thrives through feedback</Text>
                <Text style={styles.text}>Astute attention to detail</Text>
                <Text style={styles.text}>Interested in learning new tech</Text>
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
    marginRight: 50,
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
  smallText: {
    color: Colors.dark.ccText,
    fontFamily: Fonts.menu,
    margin: 0,
    fontSize: 9,
    alignContent: 'center',
  }
});
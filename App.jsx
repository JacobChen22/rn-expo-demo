import {StyleSheet, View} from 'react-native';
import Header from "./components/Header";
import StartGameView from "./views/StartGameView";

export default function App() {
    return (
        <View style={styles.container}>
            <Header title="Tennis"/>
            <StartGameView/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

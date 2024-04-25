import {StyleSheet, View} from 'react-native';
import Header from "./components/Header";
import StartGameView from "./views/StartGameView";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'source-hans': require('./assets/fonts/SourceHanSansSC-VF.otf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}
              onLayout={onLayoutRootView}>
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

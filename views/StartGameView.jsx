import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function StartGameView(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game starts here</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset"/>
                    <Button title="Confirm"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
})
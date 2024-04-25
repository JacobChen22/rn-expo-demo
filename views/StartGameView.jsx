import {Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import {useState} from "react";

export default function StartGameView(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);

    function numberInputHandler(inputText) {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    function resetInputHandler() {
        setConfirmed(false);
        setEnteredValue('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert('Invalid number', 'Number must be between 0 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return
        }
        setConfirmed(true);
        setSelectedValue(parseInt(enteredValue));
        setEnteredValue('');
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card>
                <Text>You Selected:</Text>
                <View>
                    <Text>{selectedValue}</Text>
                </View>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Game starts here</Text>
                <Card style={styles.card}>
                    <Text>Select a number</Text>
                    <Input blurOnSubmit
                           autoCapitalize="none"
                           maxLength={2}
                           onChangeText={numberInputHandler}
                           value={enteredValue}
                           autoCorrect={false}
                           keyboardType="number-pad"
                           style={styles.input}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttons}><Button title="Reset" onPress={resetInputHandler}/></View>
                        <View style={styles.buttons}><Button title="Confirm" onPress={confirmInputHandler}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
        fontFamily: 'source-hans'
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    buttons: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function FlashcardScreen() {
    const [showAnswer, setShowAnswer] = useState(false);

    const flashcard = {
        question: "What is the capital of France?",
        answer: "Paris",
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {showAnswer ? flashcard.answer : flashcard.question}
            </Text>
            <Button
                title={showAnswer ? "Show Question" : "Show Answer"}
                onPress={() => setShowAnswer(!showAnswer)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

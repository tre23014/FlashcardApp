import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useFlashcards } from '../../FlashcardsContext'; // adjust path

export default function PlayGame() {
    const { flashcards } = useFlashcards();
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    if (flashcards.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No flashcards yet. Please create some first!</Text>
            </View>
        );
    }

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % flashcards.length);
        setShowAnswer(false);
    };

    const current = flashcards[index];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{showAnswer ? current.answer : current.question}</Text>
            <Button title={showAnswer ? 'Show Question' : 'Show Answer'} onPress={() => setShowAnswer(!showAnswer)} />
            <Button title="Next Card" onPress={nextCard} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

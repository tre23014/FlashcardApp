import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFlashcards } from '../../FlashcardsContext'; // adjust path if needed

export default function CreateFlashcard() {
    const { addFlashcard } = useFlashcards();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSave = () => {
        addFlashcard({ question, answer });
        setQuestion('');
        setAnswer('');
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a Flashcard</Text>
            <TextInput
                placeholder="Enter a question"
                value={question}
                onChangeText={setQuestion}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter the answer"
                value={answer}
                onChangeText={setAnswer}
                style={styles.input}
            />
            <Button title="Save Flashcard" onPress={handleSave} />
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
});

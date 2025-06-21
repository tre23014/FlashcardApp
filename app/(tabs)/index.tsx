import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcard App</Text>

      <Link href="/createFlashcard" asChild>
        <Button title="➕ Create Flashcards" />
      </Link>

      <Link href="/playGame" asChild>
        <Button title="🎮 Start Flashcard Game" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
  },
});

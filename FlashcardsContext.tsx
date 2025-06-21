import React, { createContext, useContext, useState } from 'react';

type Flashcard = { question: string; answer: string };

type FlashcardsContextType = {
    flashcards: Flashcard[];
    addFlashcard: (card: Flashcard) => void;
};

const FlashcardsContext = createContext<FlashcardsContextType | undefined>(undefined);

export function FlashcardsProvider({ children }: { children: React.ReactNode }) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    function addFlashcard(card: Flashcard) {
        setFlashcards((prev) => [...prev, card]);
    }

    return (
        <FlashcardsContext.Provider value={{ flashcards, addFlashcard }}>
            {children}
        </FlashcardsContext.Provider>
    );
}

export function useFlashcards() {
    const context = useContext(FlashcardsContext);
    if (!context) {
        throw new Error('useFlashcards must be used within a FlashcardsProvider');
    }
    return context;
}

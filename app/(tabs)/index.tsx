import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useRickAndMorty from '@/hooks/useRickAndMorty';

export default function HomeScreen() {

  const { list, loading, error } = useRickAndMorty();

  if (loading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ThemedText type="subtitle">Loading...</ThemedText>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.errorContainer}>
        <ThemedText type="subtitle">Error: {error.message}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Characters</ThemedText>
        {list.map((character) => (
          <View key={character.id} style={styles.characterContainer}>
            <Image source={{ uri: character.image }} style={styles.characterImage} />
            <ThemedText>{character.name}</ThemedText>
          </View>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
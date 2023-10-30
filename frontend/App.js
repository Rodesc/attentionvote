import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Ka-Blam': require('./assets/Ka-Blam.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>
        ATTENTION VOTEUUUH
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ka-Blam',
    fontSize: 30,
    letterSpacing: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

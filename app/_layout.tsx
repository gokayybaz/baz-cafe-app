import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { IconButton } from 'react-native-paper';
import { HelloWave } from '@/components/HelloWave';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView>
        <View style={{padding: 24,display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
          <View>
          <ThemedText type='title'>Merhaba Gökay,</ThemedText>         

          <ThemedText type='subtitle'>Günaydın!</ThemedText>
          </View>
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          <View style={{backgroundColor: "green", height:75, width: 75, borderRadius: 37.5}}>    
          </View>
          </View>
        </View>
        </SafeAreaView>  
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

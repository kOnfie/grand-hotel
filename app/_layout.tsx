import { Stack, useRouter } from "expo-router";

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { Jost_400Regular, Jost_500Medium, Jost_600SemiBold, Jost_700Bold } from "@expo-google-fonts/jost";
import { PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "expo-font";

import { useEffect } from "react";
import "../global.css";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [appIsReady, setAppIsReady] = useState(false);
  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,

    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,

    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  useEffect(() => {
    // if (fontsLoaded || fontError) {
    //   SplashScreen.hideAsync();
    // }
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // const handleSplashComplete = () => {
  //   setAppIsReady(true);

  //   console.log("appIsReady:", appIsReady);

  //   router.replace("/onboarding-1");
  // };

  // if (!appIsReady) {
  //   return <AnimatedSplashScreen onComplete={handleSplashComplete} fontsLoaded={fontsLoaded} />;
  // }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-1" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-2" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-3" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

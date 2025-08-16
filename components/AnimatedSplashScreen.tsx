import React, { useEffect, useState } from "react";
import { Animated, Image, Text, View } from "react-native";

interface AnimatedSplashScreenProps {
  onComplete: () => void;
  fontsLoaded: boolean;
  additionalDataLoaded?: boolean;
}

const AnimatedSplashScreen: React.FC<AnimatedSplashScreenProps> = ({
  onComplete,
  fontsLoaded,
  additionalDataLoaded = true,
}) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);
  const slideAnim = new Animated.Value(50);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    const checkReadiness = () => {
      if (fontsLoaded && additionalDataLoaded) {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setIsAnimationComplete(true);

            onComplete();
          });
        }, 2500);
      }
    };

    checkReadiness();
  }, [fontsLoaded, additionalDataLoaded]);

  if (isAnimationComplete) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center bg-primary-800">
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: slideAnim }],
        }}
        className="items-center"
      >
        <View className="w-24 h-24 bg-[#5A7BC1] rounded-full mb-8 justify-center items-center">
          <Image source={require("@/assets/images/logo.png")} className="w-[73px] h-[123px]" resizeMode="contain" />
        </View>

        <Text className="text-white text-3xl font-jakarta-semibold mb-2">Grand Hotel</Text>

        <Text className="text-white/80 text-lg font-inter-medium">Find Your Perfect Stay, Anytime, Anywhere</Text>
      </Animated.View>
    </View>
  );
};

export default AnimatedSplashScreen;

import { CustomButton } from "@/components/ui/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Onboarding2() {
  const router = useRouter();

  return (
    <ImageBackground
      className="h-full"
      source={require("../assets/images/onboarding/onboarding-2.jpg")}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(17,12,29,0)", "rgba(17,12,29,1)"]}
        locations={[0, 0.76]}
        className="absolute top-0 left-0 right-0 bottom-0"
        style={StyleSheet.absoluteFill}
      >
        <View className="absolute bottom-[55px] left-[24px] right-[24px]">
          <Text className="text-white font-jost-bold text-[24px] text-center px-[60px] mb-2 ">
            Book with Ease, Stay with Style
          </Text>
          <Text className="text-white font-jost text-[14px] text-center px-[60px] mb-[24px]">
            Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem.
          </Text>

          <View className="flex-row items-center justify-center gap-2">
            <View className="w-2 h-2 bg-greyscale-50 rounded-full" />
            <View className="w-[24px] h-2 bg-primary-800 rounded-[30px]" />
            <View className="w-2 h-2 bg-greyscale-50 rounded-full" />
          </View>

          <CustomButton onPress={() => router.push("/onboarding-3")} className="mt-[32px]">
            Continue
          </CustomButton>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

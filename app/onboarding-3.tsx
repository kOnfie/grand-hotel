import { CustomButton } from "@/components/ui/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Onboarding3() {
  const router = useRouter();

  return (
    <ImageBackground
      className="h-full"
      source={require("../assets/images/onboarding/onboarding-3.jpg")}
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
            Discover Your Dream Hotel, Effortlessly
          </Text>
          <Text className="text-white font-jost text-[14px] text-center px-[60px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>

          <CustomButton onPress={() => router.push("/signin")} className="mt-[32px] mb-[24px]">
            Get Started
          </CustomButton>

          <Text className="text-white text-center font-jost">
            Don’t have an account?{" "}
            <Link href={"/signup"} asChild className="text-primary-800">
              <Text>Register</Text>
            </Link>
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

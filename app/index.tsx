import { CustomButton } from "@/components/ui/CustomButton";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/onboarding-1");
  }, []);

  return (
    <View className="flex-1 flex-row items-center">
      <CustomButton>Sign In</CustomButton>
    </View>
  );
}

import { Slot, useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomIcon } from "@/components/ui/CustomIcon";
import { ArrowLeftIconSvg } from "@/consts/icons";

export default function AuthLayout() {
  const router = useRouter();

  return (
    <SafeAreaView className="px-[24px]">
      <View className="pt-[25px] mb-[40px]">
        <Pressable onPress={() => router.back()}>
          <CustomIcon svg={ArrowLeftIconSvg} size={24} />
        </Pressable>
      </View>

      <Slot />
    </SafeAreaView>
  );
}

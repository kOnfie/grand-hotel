import { Text, View } from "react-native";

export function AuthSeparator() {
  return (
    <View className="flex-row items-center gap-3 m-auto mb-[24px]">
      <View className="w-[62px] h-[1px] bg-greyscale-400" />
      <Text className="font-jost text-[14px] text-greyscale-400">Or Sign In with</Text>
      <View className="w-[62px] h-[1px] bg-greyscale-400" />
    </View>
  );
}

import { AuthHeader } from "@/components/ui/AuthHeader";
import { CustomButton } from "@/components/ui/CustomButton";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <View>
      <AuthHeader title="Forgot Password" subtitle="Recover your account password" />

      <View className="mb-4">
        <Text className="font-jost-semibold text-[14px] text-greyscale-900 mb-2">E-mail</Text>
        <TextInput
          //   value={formData.email}
          //   onChangeText={(value: string) => updateField("email", value)}
          placeholder="Enter your email address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          className="text-greyscale-900 bg-[#e9e8e8] placeholder:text-greyscale-60 font-jost-semibold text-[14px] h-[52px] px-4 rounded-[12px]"
        />

        <CustomButton onPress={() => router.push("/create-new-password")} className="mt-[40px] ">
          Next
        </CustomButton>
      </View>
    </View>
  );
}

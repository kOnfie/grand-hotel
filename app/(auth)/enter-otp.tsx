import { AuthHeader } from "@/components/ui/AuthHeader";
import { CustomButton } from "@/components/ui/CustomButton";
import { EnterOTPInput } from "@/components/ui/EnterOTPInput";
import { ModalWindow } from "@/components/ui/ModalWindow";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function EnterOTP() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  return (
    <View>
      <ModalWindow visible={modalIsVisible}>
        <Text className="text-center text-[14px] font-jost mb-[32px] text-gray-500">
          I agree to the{" "}
          <Link href={"/enter-otp"} className="" asChild>
            <Text className="text-gray-900">Terms of Service</Text>
          </Link>{" "}
          and{" "}
          <Link href={"/enter-otp"} asChild>
            <Text className="text-gray-900">Conditions</Text>
          </Link>{" "}
          of Use including consent to electronic communications and I affirm that the information provided is my own.
        </Text>

        <View className="flex-row items-center justify-center gap-[30px]">
          <Pressable className="p-4" onPress={() => setModalIsVisible(false)}>
            <Text className="text-error-100 text-[14px] font-jost-semibold">Disagree</Text>
          </Pressable>
          <CustomButton className="py-[12px] px-[37.5px]">Agree</CustomButton>
        </View>
      </ModalWindow>

      <AuthHeader title="Enter OTP" subtitle="We have just sent you 4 digit code via your email example@gmail.com" />

      <EnterOTPInput />

      <CustomButton className="mb-[24px]" onPress={() => setModalIsVisible(true)}>
        Continue
      </CustomButton>

      <Text className="text-center font-jost-semibold text-greyscale-600 mb-6">
        Don’t receive code? <Text className="text-primary-800">Resend Code</Text>
      </Text>
    </View>
  );
}

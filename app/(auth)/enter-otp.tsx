import { AuthHeader } from "@/components/ui/AuthHeader";
import { CustomButton } from "@/components/ui/CustomButton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { ModalWindow } from "@/components/ui/ModalWindow";
import { resendConfirmation } from "@/lib/resendConfirmation";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function EnterOTP() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userEmail, setUserEmail] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    async function getEmail() {
      const userEmail = await AsyncStorage.getItem("email");

      if (!userEmail) {
        return;
      }
      setUserEmail(userEmail);
    }

    getEmail();
  }, []);

  async function verifyOtp() {
    setModalIsVisible(false);
    setIsLoading(true);

    if (!userInput) {
      return;
    }

    if (!userEmail) {
      return;
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email: userEmail,
        token: userInput,
        type: "signup",
      });

      console.log("enter-otp data: ", data);

      const user = data.user?.user_metadata;
      await AsyncStorage.setItem("user", JSON.stringify(user));

      if (error) {
        Alert.alert("Code is not valid", error.message);
        setIsLoading(false);
      } else {
        Alert.alert("Congratulations!", "Your account was registered and confirmed");
        setIsLoading(false);
        router.push("/");
      }
    } catch (error) {
      Alert.alert("Internal server error.", "Try again!");
    }
  }

  return (
    <View>
      <ModalWindow visible={isLoading} className="rounded-[50%] w-15 h-10">
        <LoadingSpinner color="#007AFF" />
      </ModalWindow>

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
          <CustomButton className="py-[12px] px-[37.5px]" onPress={verifyOtp}>
            Agree
          </CustomButton>
        </View>
      </ModalWindow>

      <AuthHeader title="Enter OTP" subtitle={`We have just sent you 4 digit code via your email ${userEmail}`} />

      <TextInput
        className="bg-greyscale-300 p-5 text-[20px]"
        value={userInput}
        onChangeText={(value: string) => setUserInput(value)}
      />

      {/* <EnterOTPInput /> */}

      <CustomButton className="mb-[24px]" onPress={() => setModalIsVisible(true)}>
        Continue
      </CustomButton>

      <Text className="text-center font-jost-semibold text-greyscale-600 mb-6">
        Don’t receive code?{" "}
        <Text className="text-primary-800" onPress={() => resendConfirmation(userEmail as string)}>
          Resend Code
        </Text>
      </Text>
    </View>
  );
}

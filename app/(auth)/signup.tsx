import { AuthHeader } from "@/components/ui/AuthHeader";
import { Checkbox } from "@/components/ui/Checkbox";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomIcon } from "@/components/ui/CustomIcon";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { ModalWindow } from "@/components/ui/ModalWindow";
import { CloseEyeSvg, OpenEyeSvg } from "@/consts/icons";
import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Signup() {
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [isActivePasswordFill, setIsActivePasswordFill] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function updateField(field: string, value: string) {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  }

  async function signUpWithEmail() {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,

        options: {
          data: {
            fullname: formData.fullname,
          },
        },
      });

      if (error) {
        Alert.alert("Create user error ", error.message);
        setIsLoading(false);
      } else {
        await AsyncStorage.setItem("email", formData.email);
        setIsLoading(false);

        router.replace("/(auth)/enter-otp");
      }
    } catch (error) {
      Alert.alert("Internal server error", "Try again please.");
    }
  }

  return (
    <View>
      <ModalWindow visible={isLoading} className="rounded-[50%] w-15 h-10">
        <LoadingSpinner color="#007AFF" />
      </ModalWindow>

      <AuthHeader title="Create Account" subtitle="Lorem ipsum dolor sit amet, consectetur" />

      <View>
        <View className="mb-4">
          <Text className="font-jost-semibold text-[14px] text-greyscale-900 mb-2">Full name</Text>
          <TextInput
            value={formData.fullname}
            onChangeText={(value: string) => updateField("fullname", value)}
            placeholder="Enter your name"
            keyboardType="default"
            autoCapitalize="none"
            autoComplete="name"
            className="text-greyscale-900 bg-[#e9e8e8] placeholder:text-greyscale-60 font-jost-semibold text-[14px] h-[52px] px-4 rounded-[12px]"
          />
        </View>

        <View className="mb-4">
          <Text className="font-jost-semibold text-[14px] text-greyscale-900 mb-2">Email Address</Text>
          <TextInput
            value={formData.email}
            onChangeText={(value: string) => updateField("email", value)}
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            className="text-greyscale-900 bg-[#e9e8e8] placeholder:text-greyscale-60 font-jost-semibold text-[14px] h-[52px] px-4 rounded-[12px]"
          />
        </View>

        <View className="mb-4">
          <Text className="font-jost-semibold text-[14px] text-greyscale-900 mb-2">Password</Text>

          <View className="flex-row items-center justify-between bg-[#e9e8e8] h-[52px] px-4 rounded-[12px] gap-5">
            <TextInput
              value={formData.password}
              onChangeText={(value: string) => updateField("password", value)}
              placeholder="Enter your password"
              autoCapitalize="none"
              autoComplete="password"
              className="text-greyscale-900 placeholder:text-greyscale-60 font-jost-semibold text-[14px] flex-1"
              secureTextEntry={!isActivePasswordFill}
            />
            <Pressable onPress={() => setIsActivePasswordFill((prevState) => !prevState)}>
              <CustomIcon svg={!isActivePasswordFill ? CloseEyeSvg : OpenEyeSvg} size={20} className="" />
            </Pressable>
          </View>
        </View>

        <View className="flex-row justify-between mb-6">
          <Pressable onPress={() => setIsRememberMe((prevState) => !prevState)} className="flex-row items-center gap-2">
            <Checkbox isActive={isRememberMe} />
            <Text className="font-jost text-[14px]">Remember me</Text>
          </Pressable>
          <Link href={"/forgot-password"} asChild>
            <Text className="font-jakarta-semibold text-error-100 text-[14px]">Forgot Password</Text>
          </Link>
        </View>

        <CustomButton className="mb-6" onPress={signUpWithEmail}>
          {isLoading ? "Loading..." : "Create An Account"}
        </CustomButton>

        {/* <AuthSeparator /> */}

        {/* <View className="flex-row justify-center items-center gap-6 mb-[46px]">
          <Pressable className="w-[72px] h-[48px] flex items-center justify-center bg-greyscale-100 rounded-[8px]">
            <CustomIcon svg={GoogleSvg} size={24} />
          </Pressable>
          <Pressable className="w-[72px] h-[48px] flex items-center justify-center bg-greyscale-100 rounded-[8px]">
            <CustomIcon svg={AppleSvg} size={20} />
          </Pressable>
          <Pressable className="w-[72px] h-[48px] flex items-center justify-center bg-greyscale-100 rounded-[8px]">
            <CustomIcon svg={FacebookSvg} size={13} />
          </Pressable>
        </View> */}

        <Text className="font-jost text-greyscale-400 text-center px-[60px]">
          By signing up you agree to our{" "}
          <Link className="text-greyscale-900" href={"/signin"}>
            Terms
          </Link>{" "}
          and{" "}
          <Link className="text-greyscale-900" href={"/signin"}>
            Conditions of Use
          </Link>
        </Text>
      </View>
    </View>
  );
}

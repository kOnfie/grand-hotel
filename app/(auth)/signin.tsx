import { AuthHeader } from "@/components/ui/AuthHeader";
import { AuthSeparator } from "@/components/ui/AuthSeparator";
import { Checkbox } from "@/components/ui/Checkbox";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomIcon } from "@/components/ui/CustomIcon";
import { AppleSvg, CloseEyeSvg, FacebookSvg, GoogleSvg, OpenEyeSvg } from "@/consts/icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isActivePasswordFill, setIsActivePasswordFill] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  function updateField(field: string, value: string) {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  }

  return (
    <View>
      <AuthHeader title="Let’s Sign you in" subtitle="Lorem ipsum dolor sit amet, consectetur" />

      <View>
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

        <CustomButton className="mb-6">Sign In</CustomButton>

        <Text className="text-center font-jost-semibold text-greyscale-600 mb-6">
          Don’t have an account?{" "}
          <Link href={"/signup"} asChild className="text-primary-800">
            <Text>Sign Up</Text>
          </Link>
        </Text>

        <AuthSeparator />

        <View className="flex-row justify-center items-center gap-6 mb-[46px]">
          <Pressable className="w-[72px] h-[48px] flex items-center justify-center bg-greyscale-100 rounded-[8px]">
            <CustomIcon svg={GoogleSvg} size={24} />
          </Pressable>
          <Pressable className="w-[72px] h-[48px] flex items-center justify-center bg-greyscale-100 rounded-[8px]">
            <CustomIcon svg={AppleSvg} size={20} />
          </Pressable>
          <Pressable className="w-[72px] h-[48px] flex items-center justify-center bg-greyscale-100 rounded-[8px]">
            <CustomIcon svg={FacebookSvg} size={13} />
          </Pressable>
        </View>

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

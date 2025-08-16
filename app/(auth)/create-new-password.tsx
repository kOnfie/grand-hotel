import { AuthHeader } from "@/components/ui/AuthHeader";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomIcon } from "@/components/ui/CustomIcon";
import { ModalWindow } from "@/components/ui/ModalWindow";
import { CloseEyeSvg, OpenEyeSvg, SuccessSvg } from "@/consts/icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function CreateNewPassword() {
  const [formData, setFormData] = useState({ newPassword: "", confirmPassword: "" });
  const [isActivePasswordFill, setIsActivePasswordFill] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  function updateField(field: string, value: string) {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  }

  return (
    <View>
      <ModalWindow visible={modalIsVisible}>
        <View className="flex items-center">
            <CustomIcon svg={SuccessSvg} size={63} className="mb-[15px]" />
            <Text className="text-center text-[18px] font-jost-semibold mb-[4px]">Success</Text>
            <Text className="text-[14px] font-jost-semibold text-greyscale-400 mb-5">
              Your password is succesfully created
            </Text>
    
            <CustomButton onPress={() => setModalIsVisible(false)} className="px-[32px]">Continue</CustomButton>
        </View>
      </ModalWindow>

      <AuthHeader
        title="Create a
New Password"
        subtitle="Enter your new password"
      />

      <View className="mb-4">
        <Text className="font-jost-semibold text-[14px] text-greyscale-900 mb-2">New Password</Text>

        <View className="flex-row items-center justify-between bg-[#e9e8e8] h-[52px] px-4 rounded-[12px] gap-5">
          <TextInput
            value={formData.newPassword}
            onChangeText={(value: string) => updateField("newPassword", value)}
            placeholder="Enter new password"
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

      <View className="mb-10">
        <Text className="font-jost-semibold text-[14px] text-greyscale-900 mb-2">Confirm Password</Text>

        <View className="flex-row items-center justify-between bg-[#e9e8e8] h-[52px] px-4 rounded-[12px] gap-5">
          <TextInput
            value={formData.confirmPassword}
            onChangeText={(value: string) => updateField("confirmPassword", value)}
            placeholder="Confirm your password"
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

      <CustomButton onPress={() => setModalIsVisible(true)}>Next</CustomButton>
    </View>
  );
}

import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { Modal, View } from "react-native";

interface ModalWindowProps {
  visible: boolean;
  children: ReactNode;
}

export function ModalWindow({ visible, children }: ModalWindowProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <BlurView
        intensity={24}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView" // Для Android
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View className="bg-white py-[40px] px-[24px] rounded-[16px] mx-[40px]">{children}</View>
      </BlurView>
    </Modal>
  );
}

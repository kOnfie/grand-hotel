import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { Modal, View } from "react-native";

import cn from "classnames";

interface ModalWindowProps {
  visible: boolean;
  children: ReactNode;
  className?: string;
}

export function ModalWindow({ visible, children, className }: ModalWindowProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <BlurView
        intensity={24}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView" // Для Android
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View className={cn("bg-white py-[40px] px-[24px] rounded-[16px] mx-[40px]", className)}>{children}</View>
      </BlurView>
    </Modal>
  );
}

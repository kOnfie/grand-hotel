import cn from "classnames";
import { ReactNode } from "react";

import { Pressable, PressableProps, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  className?: string;
  children: ReactNode;
}

export const CustomButton = ({ className, children, ...pressableProps }: CustomButtonProps) => {
  return (
    <Pressable className={cn(className, "bg-primary-800 py-4 rounded-[12px] font-semibold")} {...pressableProps}>
      <Text className="text-white font-jakarta-semibold text-center">{children}</Text>
    </Pressable>
  );
};

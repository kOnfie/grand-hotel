import cn from "classnames";
import { ReactNode } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <SafeAreaView className={cn("px-[24px]", className)}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </SafeAreaView>
  );
}

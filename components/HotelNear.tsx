import cn from "classnames";
import { View } from "react-native";
import { SectionHeader } from "./ui/SectionHeader";

interface HotelNearProps {
  className?: string;
}

export function HotelNear({ className }: HotelNearProps) {
  return (
    <View className={cn(className, "")}>
      <SectionHeader title="Hotel near you" linkText="Open Map" href="/" />

      <View className="w-full h-[167px] bg-black rounded-[20px]" />
    </View>
  );
}

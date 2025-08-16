import cn from "classnames";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

interface CustomIconProps {
  svg: string;
  size?: number;
  color?: string;
  className?: string;
}

export function CustomIcon({ svg, size = 18, color = "#000", className }: CustomIconProps) {
  return (
    <View className={cn(className, "")}>
      <SvgXml xml={svg} width={size} color={color} />
    </View>
  );
}

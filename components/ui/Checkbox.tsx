import cn from "classnames";

import { TickSvg } from "@/consts/icons";
import { View } from "react-native";
import { CustomIcon } from "./CustomIcon";

interface CheckboxProps {
  isActive: boolean;
}

export function Checkbox({ isActive }: CheckboxProps) {
  return (
    <View
      className={cn(
        "w-6 h-6 border border-solid border-greyscale-100 rounded-[50%]",
        isActive && "bg-success-100 flex items-center justify-center border-none"
      )}
    >
      {isActive && <CustomIcon svg={TickSvg} size={14} color="#fff" />}
    </View>
  );
}

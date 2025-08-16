import cn from "classnames";

import { useState } from "react";
import { TextInput, View } from "react-native";

export function EnterOTPInput() {
  const [numberOfActiveInput, setNumberOfActiveInput] = useState<number>(1);

  return (
    <View className="flex-row gap-4 justify-center items-center mb-[40px]">
      {[1, 2, 3, 4].map((el) => (
        <View
          key={el}
          className={cn(
            "w-[56px] h-[56px] bg-[#00000008] rounded-[24px] flex items-center justify-center",
            numberOfActiveInput === el && "border border-solid border-secondary-500 bg-transparent"
          )}
        >
          <TextInput
            onPress={() => setNumberOfActiveInput(el)}
            placeholder="0"
            keyboardType="numeric"
            className={cn("p-4 text-[24px] text-greyscale-400 font-jost-bold", numberOfActiveInput === el && "text-greyscale-900")}
            maxLength={1}
          />
        </View>
      ))}
    </View>
  );
}

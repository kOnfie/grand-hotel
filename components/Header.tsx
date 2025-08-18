import { NotifySvg, SearchSvg } from "@/consts/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cn from "classnames";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { CustomIcon } from "./ui/CustomIcon";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [user, setUser] = useState({ fullname: "" });

  useEffect(() => {
    async function getUser() {
      const userJSON = await AsyncStorage.getItem("user");
      if (!userJSON) {
        return;
      }

      const user = JSON.parse(userJSON);
      setUser(user);
    }

    getUser();
  }, []);

  return (
    <View className={cn("flex-row items-center justify-between absolute top-0 left-0 right-0 bg-[#FEFEFE] z-50 pt-[70px] px-[24px] pb-[14px]", className)}>
      <View className="flex-row items-center gap-[10px]">
        <View className="w-10 h-10 rounded-[50%] bg-black" />
        <View className="flex-col justify-between">
          <Text className="font-jakarta-semibold">{user.fullname}</Text>
          <Text className="font-jakarta text-[14px] text-greyscale-400">San Diego, CA</Text>
        </View>
      </View>

      <View className="flex-row gap-2">
        <Pressable className="w-10 h-10 rounded-[50%] flex-row items-center justify-center border border-greyscale-300 border-solid">
          <CustomIcon svg={SearchSvg} size={16} />
        </Pressable>
        <Pressable className="w-10 h-10 rounded-[50%] flex-row items-center justify-center border border-greyscale-300 border-solid">
          <CustomIcon svg={NotifySvg} size={16} />
        </Pressable>
      </View>
    </View>
  );
}

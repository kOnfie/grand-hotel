import { BookingSvg, HomeSvg, MessageSvg, ProfileSvg } from "@/consts/icons";
import cn from "classnames";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { CustomIcon } from "./ui/CustomIcon";

interface FooterProps {
  className?: string;
}

const ITEMS = [
  {
    id: 1,
    name: "Home",
    icon: HomeSvg,
  },
  {
    id: 2,
    name: "My Booking",
    icon: BookingSvg,
  },
  {
    id: 3,
    name: "Message",
    icon: MessageSvg,
  },
  {
    id: 4,
    name: "Profile",
    icon: ProfileSvg,
  },
];

export function Footer({ className }: FooterProps) {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <View
      className={cn(className, "absolute bottom-0 left-0 right-0 z-50 bg-greyscale-0 pt-[16.5px] pb-[50px] px-[24px]")}
    >
      <View className="flex-row items-center justify-between">
        {ITEMS.map((item) => (
          <Pressable key={item.id} className="w-[60px]" onPress={() => setActiveLink(item.name)}>
            <CustomIcon
              svg={item.icon}
              size={18}
              color={activeLink === item.name ? "#2853AF" : "#808897"}
              className="mb-[4px] m-auto"
            />

            <Text
              className={cn(
                "text-[11px] font-jost-semibold text-center",
                activeLink === item.name ? "text-primary-800" : "text-greyscale-400"
              )}
            >
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

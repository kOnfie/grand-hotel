import { Apartement, HotelsSvg, LocationSvg, StarSvg, VillasSvg } from "@/consts/icons";
import cn from "classnames";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { CustomIcon } from "./ui/CustomIcon";
import { SectionHeader } from "./ui/SectionHeader";

interface RecomendedProps {
  className?: string;
}

const TABS = [
  {
    name: "All",
    icon: null,
  },
  {
    name: "Villas",
    icon: VillasSvg,
  },
  {
    name: "Hotels",
    icon: HotelsSvg,
  },
  {
    name: "Apartement",
    icon: Apartement,
  },
];

const ITEMS = [
  {
    id: 1,
    name: "The Horizon Retreat",
    rating: 4.8,
    location: "Los Angeles, CA",
    pricePerNight: 480,
    image: "horizon-retreat.jpg",
    type: "Villas",
  },
  {
    id: 2,
    name: "Opal Grove Inn",
    rating: 4.5,
    location: "San Diego, CA",
    pricePerNight: 190,
    image: "opal-grove-inn.jpg",
    type: "Hotels",
  },
  {
    id: 3,
    name: "Astra Grand Hotel",
    rating: 4.1,
    location: "New York, NY",
    pricePerNight: 300,
    image: "astra-grand-hotel.jpg",
    type: "Apartement",
  },
];

export const itemImages = {
  "opal-grove-inn.jpg": require("@/assets/images/most-popular/opal-grove-inn.jpg"),
  "astra-grand-hotel.jpg": require("@/assets/images/most-popular/astra-grand-hotel.jpg"),
  "horizon-retreat.jpg": require("@/assets/images/most-popular/horizon-retreat.jpg"),
};

export function Recomended({ className }: RecomendedProps) {
  const [activeTab, setActiveTab] = useState("All");
  const formattedItems = ITEMS.filter((item) => (activeTab !== "All" ? item.type === activeTab : item));

  return (
    <View className={cn(className, "")}>
      <SectionHeader title="Recomended for you" linkText="See All" href={"/"} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
        {TABS.map((tab, index) => (
          <Pressable
            key={tab.name}
            style={{ marginRight: index < TABS.length - 1 ? 6 : 0 }}
            className={cn(
              "py-[7px] px-[14px] border border-greyscale-300 border-solid rounded-[8px] flex-row items-center gap-3",
              activeTab === tab.name && "bg-primary-800 border-primary-800"
            )}
            onPress={() => setActiveTab(tab.name)}
          >
            {tab.icon !== null && (
              <View className="w-[28px] h-[28px] rounded-[50%] bg-greyscale-100 flex-row items-center justify-center">
                <CustomIcon svg={tab.icon} size={16} />
              </View>
            )}

            <Text
              className={cn(
                "",
                activeTab === tab.name ? "text-greyscale-0 font-jost-semibold" : "text-greyscale-500 font-jost"
              )}
            >
              {tab.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View className="grid gap-[32px]">
        {formattedItems.map((item) => (
          <View key={item.id} className="flex-row justify-between items-start">
            <View className="flex-row gap-3">
              <Image source={itemImages[item.image]} className="w-[78px] h-[78px] rounded-[8px]" />

              <View className="flex-col justify-between">
                <Text className="font-inter-semibold text-[16px]">{item.name}</Text>
                <View className="flex-row gap-[6px] items-center">
                  <CustomIcon svg={LocationSvg} size={12} />
                  <Text className="font-jost text-[12px] text-greyscale-500">{item.location}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-inter-medium text-primary-800 text-[16px]">${item.pricePerNight} </Text>
                  <Text className="font-inter-medium text-[14px]">/night</Text>
                </View>
              </View>
            </View>

            <View className="flex-row items-center gap-[3px]">
              <CustomIcon svg={StarSvg} />
              <Text className="font-jost text-[14px]">{item.rating}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

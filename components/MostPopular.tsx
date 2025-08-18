import { StarSvg } from "@/consts/icons";
import cn from "classnames";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { CustomIcon } from "./ui/CustomIcon";
import { SectionHeader } from "./ui/SectionHeader";

interface MostPopularProps {
  className?: string;
}

const ITEMS = [
  {
    id: 1,
    name: "The Horizon Retreat",
    rating: 4.8,
    location: "Los Angeles, CA",
    pricePerNight: 480,
    image: "horizon-retreat.jpg",
  },
  {
    id: 2,
    name: "Opal Grove Inn",
    rating: 4.5,
    location: "San Diego, CA",
    pricePerNight: 190,
    image: "opal-grove-inn.jpg",
  },
  {
    id: 3,
    name: "Astra Grand Hotel",
    rating: 4.1,
    location: "New York, NY",
    pricePerNight: 300,
    image: "astra-grand-hotel.jpg",
  },
];

export const hotelImages = {
  "opal-grove-inn.jpg": require("@/assets/images/most-popular/opal-grove-inn.jpg"),
  "astra-grand-hotel.jpg": require("@/assets/images/most-popular/astra-grand-hotel.jpg"),
  "horizon-retreat.jpg": require("@/assets/images/most-popular/horizon-retreat.jpg"),
};

export function MostPopular({ className }: MostPopularProps) {
  return (
    <View className={cn(className, "")}>
      <SectionHeader title="Most popular" linkText="See All" href={"/"} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ITEMS.map((item, index) => (
          <ImageBackground
            style={{
              marginRight: index < ITEMS.length - 1 ? 16 : 0,
            }}
            className="w-[156px] h-[220px] rounded-[12px] overflow-hidden p-3 justify-end"
            source={hotelImages[item.image]}
            resizeMode="cover"
            key={item.id}
          >
            <Text className="text-greyscale-0 text-[14px] font-jost-semibold mb-[5px] text-[16px]">{item.name}</Text>
            <Text className="text-greyscale-0 text-[10px] font-jost mb-[5px]">Los Angeles, CA</Text>

            <View className="flex-row item-center justify-between">
              <Text className="text-greyscale-0 font-jost-semibold text-[12px]">${item.pricePerNight}/night</Text>
              <View className="flex-row items-center gap-[3px]">
                <CustomIcon svg={StarSvg} />
                <Text className="font-jost text-[12px] text-greyscale-100">{item.rating}</Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
}

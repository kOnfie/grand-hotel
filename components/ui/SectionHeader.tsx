import cn from "classnames";
import { Link } from "expo-router";
import { Text, View } from "react-native";

interface SectionHeaderProps {
  className?: string;

  title: string;
  linkText: string;
  href: string;
}

export function SectionHeader({ className, title, linkText, href }: SectionHeaderProps) {
  return (
    <View className={cn("flex-row items-center justify-between mb-4", className)}>
      <Text className="font-jost-semibold">{title}</Text>
      <Link className="font-jost-semibold text-primary-800" href={href}>
        {linkText}
      </Link>
    </View>
  );
}

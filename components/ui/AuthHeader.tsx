import { Text } from "react-native";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <>
      <Text className="font-jost-bold text-[24px] mb-2 text-center">{title}</Text>
      <Text className="font-jost text-[14px] mb-[32px] text-center text-greyscale-700">{subtitle}</Text>
    </>
  );
}

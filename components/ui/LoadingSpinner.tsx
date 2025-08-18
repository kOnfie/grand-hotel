import cn from "classnames";
import React from "react";
import { ActivityIndicator, View } from "react-native";

interface LoadingSpinnerProps {
  size?: number | "large" | "small";
  color?: string;
  className?: string;
}

export function LoadingSpinner({ size = "large", color = "#007AFF", className }: LoadingSpinnerProps) {
  return (
    <View className={cn("items-center justify-center", className)}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

export default LoadingSpinner;

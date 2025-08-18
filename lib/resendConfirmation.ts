import { Alert } from "react-native";
import { supabase } from "./supabase";

export async function resendConfirmation(email: string) {
  try {
    const { error } = await supabase.auth.resend({ type: "signup", email });
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Code sent", `Check your email ${email}`);
    }
  } catch (error) {
    Alert.alert("Internal server error", error);
  }
}

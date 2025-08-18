import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HotelNear } from "@/components/HotelNear";
import { MostPopular } from "@/components/MostPopular";
import { Recomended } from "@/components/Recomended";
import { Container } from "@/components/ui/Container";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      // await AsyncStorage.removeItem("user");
      const userJSON = await AsyncStorage.getItem("user");
      if (!userJSON) {
        router.replace("/onboarding-1");
        return;
      }

      const user = JSON.parse(userJSON);
      setUser(user);
    }

    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <Container className="pt-4 pb-20 bg-[#FEFEFE]">
        <MostPopular className="mt-[64px] mb-6" />

        <Recomended className="mb-6" />

        <HotelNear className="mb-6" />
      </Container>
      <Footer />
    </>
  );
}

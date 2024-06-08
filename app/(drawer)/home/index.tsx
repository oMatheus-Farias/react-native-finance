import { AuthContext } from "@/app/_contexts/auth";
import { useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { View, Text } from "react-native";

const HomePage = () => {
  const { signed } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    if (!signed) {
      navigation.navigate("(login)/index" as never);
    }
  }, []);

  return (
    <View>
      <Text>home page</Text>
    </View>
  );
};

export default HomePage;

import { AuthContext } from "@/app/_contexts/auth";
import { useNavigation } from "expo-router";
import { useContext } from "react";
import { View, Text } from "react-native";

const HomePage = () => {
  const { signed, user } = useContext(AuthContext);

  const navigation = useNavigation();

  console.log("Signed", signed);
  console.log("User", user);

  return (
    <View>
      <Text>home page</Text>
    </View>
  );
};

export default HomePage;

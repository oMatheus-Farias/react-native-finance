import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(login)/index"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="register/index"
          options={{
            title: "Voltar",
            headerStyle: {
              backgroundColor: "#3b3dbf",
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#f0f4ff" />
    </>
  );
};

export default Layout;

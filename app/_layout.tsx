import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import AuthProvider from "./_contexts/auth";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(stack)/(login)/index"
            options={{ title: "Login", headerShown: false }}
          />

          <Stack.Screen
            name="(stack)/register/index"
            options={{
              title: "Voltar",
              headerStyle: {
                backgroundColor: "#3b3dbf",
              },
              headerTintColor: "#fff",
              headerBackTitleVisible: false,
            }}
          />

          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
      <StatusBar backgroundColor="#f0f4ff" />
    </>
  );
};

export default Layout;

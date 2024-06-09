import { Stack } from "expo-router";
import AuthProvider from "../_contexts/auth";

const Layout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Layout;

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import AuthProvider from "@/app/_contexts/auth";

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Tela Inicial",
              title: "Home",
            }}
          />

          <Drawer.Screen
            name="profile/index"
            options={{
              drawerLabel: "Tela de Perfil",
              title: "Profile",
            }}
          />
        </Drawer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;

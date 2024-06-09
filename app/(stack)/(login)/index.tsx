import { Platform } from "react-native";
import { useNavigation } from "expo-router";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

const LoginPage = () => {
  const navigation = useNavigation();

  const handleNavigateRegisterPress = () => {
    navigation.navigate("(stack)/register/index" as never);
  };

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Logo source={require("../../../assets/images/Logo.png")} alt="Logo" />

        <AreaInput>
          <Input placeholder="Seu e-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton
          activeOpacity={0.8}
          onPress={() => navigation.navigate("(drawer)" as never)}
        >
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={handleNavigateRegisterPress}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
};

export default LoginPage;

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
import { useContext, useState } from "react";
import { AuthContext } from "@/app/_contexts/auth";

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleNavigateRegisterPress = () => {
    navigation.navigate("(stack)/register/index" as never);
  };

  const handleSignInPress = async () => {
    const signInUser = { email, password };

    await signIn({ signInUser });
  };

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Logo source={require("../../../assets/images/Logo.png")} alt="Logo" />

        <AreaInput>
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignInPress}>
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

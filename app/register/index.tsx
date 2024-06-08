import { Platform } from "react-native";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../(login)/styles";

const RegisterPage = () => {
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Logo source={require("../../assets/images/Logo.png")} alt="Logo" />

        <AreaInput>
          <Input placeholder="Seu nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu e-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default RegisterPage;

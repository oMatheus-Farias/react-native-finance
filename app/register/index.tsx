import { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../_contexts/auth";
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
  const { signUp, loading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpPress = async () => {
    const signUpUser = {
      name,
      email,
      password,
    };

    await signUp({ signUpUser });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Logo source={require("../../assets/images/Logo.png")} alt="Logo" />

        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </AreaInput>

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
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignUpPress}>
          <SubmitText>
            {loading ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              "Cadastrar"
            )}
          </SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default RegisterPage;

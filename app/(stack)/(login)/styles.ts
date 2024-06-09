import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: #121212;
  font-size: 16px;
  border-radius: 8px;
  width: 90%;
  padding: 10px;
  margin-bottom: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #3b3dbf;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin: 20px 0px;
`;

export const LinkText = styled.Text`
  color: #121212;
`;

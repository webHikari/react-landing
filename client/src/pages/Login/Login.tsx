import Header from "@widgets/Header/Header";
import AuthForm from "@shared/AuthForm/AuthForm";
import Input from "@shared/Input/Input";

export default function Login() {
  return (
    <>
      <Header />
      <AuthForm>
        <Input styleType="Input1" value="Your email" />
      </AuthForm>
    </>
  );
}

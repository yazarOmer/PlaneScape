import { CardWrapper } from "../components/auth/CardWrapper";
import { RegisterForm } from "../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CardWrapper
        headerTitle="Welcome"
        headerSubtitle="Please enter your details to sign up"
        footerLabel="Already have an account?"
        footerAction={{ label: "Sign in to your account", href: "/login" }}
      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
}

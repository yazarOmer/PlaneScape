import { CardWrapper } from "../components/auth/CardWrapper";
import { LoginForm } from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CardWrapper
        headerTitle="Welcome Back"
        headerSubtitle="Please enter your details to sign in"
        footerLabel="Don't have an account?"
        footerAction={{ label: "Create an account", href: "/register" }}
      >
        <LoginForm />
      </CardWrapper>
    </div>
  );
}

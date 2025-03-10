import { Metadata } from "next";
import { SignUpForm } from "@/components/user-sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for a new account on Buildog",
};

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm text-muted-foreground">Enter your email below to sign in</p>
      </div>
      <SignUpForm />
    </>
  );
}

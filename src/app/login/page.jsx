"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

import AuthButton from "../component/AuthButton";
import CheckboxSearch from "../component/CheckboxSearch";

export default function Login() {
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  });

  const handleSignInWithGoogle = async () => {
    const res = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: isOwner
          ? `${location.origin}/dashboard/owner`
          : `${location.origin}/dashboard/tenant`,
      },
    });
  };

  const handleAuthType = () => {
    const type = document.getElementById("Owner");
    console.log(type);
  };

  if (user) router.push("/dashboard");

  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    <main className="h-screen w-screen bg-white flex items-center justify-center flex-col gap-5">
      <div className="">
        <p>
          The future belongs to those who believe in the beauty of their dreams.
        </p>
        <p>- Eleanor Roosevelt</p>
      </div>
      <form
        onChange={() => {
          handleAuthType();
          // setIsOwner(this.form.auth == "Owner" ? true : false);
        }}
      >
        <CheckboxSearch title="Owner" value="Owner" />
        <CheckboxSearch title="Tenant" value="Tenant" />
        <AuthButton
          icon={"images/google-icon.svg"}
          text={"Google"}
          clickHandler={() => {
            handleSignInWithGoogle();
          }}
        />
      </form>
      <AuthButton icon={"images/facebook-icon.svg"} text={"Facebook"} />
      <AuthButton icon={"images/apple-icon.svg"} text={"Apple"} />
    </main>
  );
}

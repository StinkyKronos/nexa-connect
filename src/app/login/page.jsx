"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
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
        redirectTo: `${location.origin}/dashboard`,
      },
    });
  };

  if (user) router.push("/dashboard");

  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    <main className="h-screen flex items-center justify-center bg-green-400 p-6">
      <button
        onClick={handleSignInWithGoogle}
        className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
      >
        Sign In with google
      </button>
    </main>
  );
}

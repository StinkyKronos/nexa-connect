"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export default function Home() {
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

  if (user) return <main>rfe</main>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar/>
      <div
        className="bg-white/10 px-5 py-2 rounded-md"
        onClick={() => router.push("/login")}
      >
        Login
      </div>
    </main>
  );
}

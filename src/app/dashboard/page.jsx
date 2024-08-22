"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export default function Dashboard() {
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (user)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-white/10 px-5 py-2 rounded-md">Signed In...</div>
        <button
          onClick={handleSignOut}
          className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
        >
          Sign Out
        </button>
      </main>
    );

  if (loading)
    return (
      <main>
        <div>Loading</div>
      </main>
    );

  router.push("/login");
}

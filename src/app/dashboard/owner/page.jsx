"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LoadingPage from "@/app/loading/page";
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
			<main className="w-screen h-screen">
				<img className="w-full" src="/images/owner-dash.jpg" alt="" onClick={() =>router.push('/')} />
			</main>
		);

  if (loading) return <LoadingPage />;

  router.push("/login");
}

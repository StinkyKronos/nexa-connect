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
			<main className="w-screen h-screen">
				<img className="w-full" src="/images/tenant-dash.jpg" alt="" />
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

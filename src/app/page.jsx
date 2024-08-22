"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import NavBar from "./component/NavBar";

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
		<main className="h-screen w-screen bg-white">
			<NavBar />

			<div className="mt-5 flex h-screen w-screen justify-center">
				<div className="w-11/12 h-3/4 bg-cover bg-hero-banner rounded-xl flex flex-col items-start justify-center px-10 gap-3">
					<p className="text-3xl poppins-medium">
						find your <span className="text-[#FC813E]">home</span> like room now
					</p>
					<div className="w-full h-14 bg-white rounded-2xl flex justify-between items-center px-5">
            <input type="text" placeholder="Search" className="focus:outline-none w-full text-black poppins-medium h-3/4" />
            <img src="images/search.svg" alt="" width={32} height={32} />
          </div>
				</div>
			</div>
		</main>
	);
}

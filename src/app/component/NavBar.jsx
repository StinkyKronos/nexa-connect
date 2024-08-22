'use client'

import { useRouter } from "next/navigation";

export default function NavBar() {
	const router = useRouter();

	return (
		<div className="w-screen flex justify-between px-20 py-8 text-black absolute">
			<h2 className="poppins-semibold text-3xl">ApnaKamra</h2>
			<div className="flex gap-5">
				<p className="poppins-medium hover:bg-black/10 px-3 py-2 rounded-full duration-200 cursor-pointer" onClick={() => router.push('/login')}>Login</p>
				<p className="poppins-medium hover:bg-black/10 px-3 py-2 rounded-full duration-200 cursor-pointer">About Us</p>  
			</div>
		</div>
	);
}

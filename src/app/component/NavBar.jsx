'use client'

import { useRouter } from "next/navigation";

export default function NavBar() {
	const router = useRouter();

	return (
		<div className="w-screen flex justify-between px-10 py-5 text-black">
			<h2 className="poppins-medium text-2xl">ApnaKamra</h2>
			<div className="flex gap-5">
				<p className="poppins-medium" >Login</p>
				<p className="poppins-medium">About Us</p>  
			</div>
		</div>
	);
}

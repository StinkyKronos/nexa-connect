'use client'

import { useRouter } from "next/navigation";

export default function NavBar({link1, link2}) {
	const router = useRouter();

	return (
		<div className="w-screen flex justify-between px-20 py-8 text-black absolute">
			<h2 className="poppins-semibold text-3xl cursor-pointer hover:text-[#FC813E] duration-200" onClick={() => router.push('/')}>ApnaKamra</h2>
			<div className="flex gap-5">
				<p className="poppins-medium hover:bg-black/10 px-3 py-2 rounded-full duration-200 cursor-pointer" onClick={() => router.push(`/${link1.toLowerCase()}`)}>{link1}</p>
				<p className="poppins-medium hover:bg-black/10 px-3 py-2 rounded-full duration-200 cursor-pointer" onClick={() => router.push(`/${link2.toLowerCase()}`)}>{link2}</p>  
			</div>
		</div>
	);
}

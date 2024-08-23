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
				redirectTo: isOwner ? `${location.origin}/dashboard/owner` : `${location.origin}/dashboard/tenant`,
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
		<main className="h-screen w-screen bg-[#FDD1B9] flex items-center justify-center flex-col gap-5">
			<div className="w-3/4 h-3/4 flex flex-col justify-center items-center bg-white rounded-lg px-10 py-10">
				<h1 className="text-black text-3xl poppins-medium w-full">ApnaKamra</h1>
				<form action="" className="h-full w-fit flex flex-col items-center justify-center gap-5">
					<div className="flex items-center justify-center gap-5 h-fit w-fit">
						<div className="w-fit h-fit relative">
							<input type="radio" name="services" value="" className="w-full h-full absolute appearance-none border-[#fba97b] bg-[#FFF3ED] checked:border-[#FC813E] checked:bg-[#FFDFCD] border-2 cursor-pointer" />
							<label className="w-full h-full flex flex-col justify-center items-center px-20 py-3">
								<h3 className="poppins-medium w-fit select-none text-[#909090] text-2xl z-10">Tenant</h3>
							</label>
						</div>
						<div className="w- h-fit relative">
							<input type="radio" name="services" value="" className="w-full h-full absolute appearance-none border-[#fba97b] bg-[#FFF3ED] checked:border-[#FC813E] checked:bg-[#FFDFCD] border-2 cursor-pointer" />
							<label className="w-full h-full flex flex-col justify-center items-center px-20 py-3">
								<h3 className="poppins-medium w-fit select-none text-[#909090] text-2xl z-10">Landlord</h3>
							</label>
						</div>
					</div>
					<button className="w-full gap-2 border-['#1E2432'] border-2 px-5 py-2 rounded-md cursor-pointer flex items-center justify-center" onClick={handleSignInWithGoogle}>
						<img src="images/google-icon.svg" width={32} alt="" />
						<p className="text-black poppins-regular text-2xl">Sign in with Google</p>
					</button>
				</form>
        <div className="ml-auto">
          <p className="text-black text-2xl poppins-medium">The future belongs to those who <span className="text-[#D9650B]">believe</span> in the <br /><span className="text-[#D9650B]">beauty of their dreams.</span></p>
          <p className="text-black w-full text-right text-lg poppins-medium">- Eleanor Roosevelt</p>
        </div>
			</div>
			{/* <form
				onChange={() => {
					handleAuthType();
					// setIsOwner(this.form.auth == "Owner" ? true : false);
				}}
			>
				<CheckboxSearch title="Owner" value="Owner" />
				<CheckboxSearch title="Tenant" value="Tenant" />
				
			</form>
			<AuthButton icon={"images/facebook-icon.svg"} text={"Facebook"} />
			<AuthButton icon={"images/apple-icon.svg"} text={"Apple"} /> */}
		</main>
	);
}

import Head from "next/head";
import Header from "@/components/Home/Header";
import Features from "@/components/Home/Features";
import Contribute from "@/components/Home/Contribute";
import CallToAction from "@/components/Home/CallToAction";

export default function Home() {
	return (
		<div>
			<div className="mx-auto overflow-x-hidden pt-12">
				<Header />
			</div>
			<div className="container mx-auto py-12">
				<Features />
				<Contribute />
			</div>
			{/* <CallToAction/> */}
		</div>
	);
}

import React from "react";
import Head from "next/head";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="">
			{/* <html className="fixed -z-50 h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100"></html> */}
			<Head>
				<title>La Nouvelle Académie</title>
			</Head>
			<NavBar />
			<div className="pt-32">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;

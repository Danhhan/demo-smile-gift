import "./globals.css";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

const montserrat = Montserrat({
	subsets: ["latin", "vietnamese"],
	variable: "--font-montserrat",
	display: "swap",
});

const opensans = Open_Sans({
	subsets: ["latin", "vietnamese"],
	variable: "--font-opensans",
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin", "vietnamese"],
	variable: "--font-playfair",
	weight: ["400", "700"],
	display: "swap",
});

export const metadata = {
	title: "CLB Thiện Nguyện Smile Gift",
	description:
		"Kết nối nghệ thuật và lòng nhân ái - Nơi tập hợp những bạn trẻ yêu thích nghệ thuật và mong muốn dùng tài năng để trao đi yêu thương.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="vi"
			className={`${montserrat.variable} ${opensans.variable} ${playfair.variable}`}
		>
			<body className="font-body">
				<NextTopLoader showSpinner={false} />
				<Providers>
					<Header />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

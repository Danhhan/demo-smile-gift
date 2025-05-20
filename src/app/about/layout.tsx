import React from "react";

export async function generateMetadata() {
	return {
		title: "Về chúng tôi | Smile Gift",
		description: "Giới thiệu về Smile Gift",
	};
}

function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

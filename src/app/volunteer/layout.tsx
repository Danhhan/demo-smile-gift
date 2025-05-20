import React from "react";

export async function generateMetadata() {
	return {
		title: "Tình nguyện viên | Smile Gift",
		description: "Tình nguyện viên của chúng tôi",
	};
}

function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

import React from "react";

export async function generateMetadata() {
	return {
		title: "Dự án | Smile Gift",
		description: "Dự án của chúng tôi",
	};
}

function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

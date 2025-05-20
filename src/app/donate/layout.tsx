import React from "react";

export async function generateMetadata() {
	return {
		title: "Quyên góp | Smile Gift",
		description: "Quyên góp để giúp đỡ những hoàn cảnh khó khăn.",
	};
}

function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

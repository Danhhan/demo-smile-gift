import React from "react";

export async function generateMetadata() {
	return {
		title: "Ủng hộ chúng tôi | Smile Gift",
		description: "Ủng hộ chúng tôi để giúp đỡ những hoàn cảnh khó khăn.",
	};
}
function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

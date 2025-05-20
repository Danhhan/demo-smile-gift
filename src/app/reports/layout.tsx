import React from "react";

export async function generateMetadata() {
	return {
		title: "Báo cáo | Smile Gift",
		description: "Báo cáo của chúng tôi",
	};
}

function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

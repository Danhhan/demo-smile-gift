import React from "react";

export async function generateMetadata() {
	return {
		title: "Tin tức | Smile Gift",
		description: "Tin tức mới nhất về Smile Gift",
	};
}
function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

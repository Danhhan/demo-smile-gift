import React from "react";

export async function generateMetadata() {
	return {
		title: "Liên hệ với chúng tôi | Smile Gift",
		description: "Liên hệ với chúng tôi để biết thêm thông tin.",
	};
}

function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

export default Layout;

import React from "react";

export async function generateMetadata() {
  return {
    title: "Lưu trữ báo cáo | Smile Gift",
    description: "Lưu trữ báo cáo tài chính của CLB Thiện Nguyện Smile Gift",
  };
}

function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default Layout;
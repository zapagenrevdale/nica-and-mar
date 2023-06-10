import React from "react";
import Header from "@/components/organisms/header";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center flex-col relative">
      {/* header */}
      <Header />
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Layout;

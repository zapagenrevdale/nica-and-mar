import React from "react";
import Header from "@/components/organisms/header";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-w-full w-full flex items-center flex-col relative">
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

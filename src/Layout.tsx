import { ReactNode } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

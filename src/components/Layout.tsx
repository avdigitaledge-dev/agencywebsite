import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Layout;

import "./style.scss";
import Header from "@/components/header";
import Drawer from "@/components/drawer";
import ModalProvider from "@/components/providers/modal.provired.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="main-layout">
      <Header />
      <main className="main-page">
        {children}
      </main>
      <Drawer />
      <ModalProvider />
    </div>
  );
};

export default Layout;

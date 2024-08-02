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
      <footer style={{textAlign: 'center'}}>
        <p>© {new Date().getFullYear()} All rights reserved. Copying is prohibited. The
          code is the property of the developer. <a href="https://github.com/kraevskiy" className="text-blue" target="_blank">Illia Kraievskyi</a>.
        </p>
      </footer>
    </div>
  );
};

export default Layout;

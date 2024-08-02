import "./style.scss";
import Burger from "@/components/header/components/burger.tsx";
import { images } from "@/assets/images";

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <div className="header-body__burger">
            <Burger />
          </div>
          <div className="header-body__logo">
            <img src={images.logo} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

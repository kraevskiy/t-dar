import cn from "classnames";

import "./style.scss";
import { useDrawer } from "@/hooks/use-drawer.ts";
import { images } from "@/assets/images";
import Button from "@/components/button";
import { useState } from "react";
import Icon from "@/components/icon";

const Drawer = () => {
  const { open, onClose } = useDrawer();
  const [isFade, setIsFade] = useState(false);

  const endAnimation = () => {
    onClose();
    setIsFade(false);
  };

  return (
    <div className={cn("drawer", {
      "--isOpen": open,
    })}>
      <div className={cn("drawer-overlay", {
        "--active": open,
        "fade-out-overlay": isFade,
      })} onClick={() => setIsFade(true)} />
      <div className={cn("drawer-body", {
        "fade-out-menu": isFade,
      })} onAnimationEnd={endAnimation}>
        <div className="drawer-header">
          <img src={images.logo} alt="logo" />
          <Button className="drawer-header__close" onClick={() => setIsFade(true)} variant="icon">
            <Icon name="x" />
          </Button>
        </div>
        <nav className="drawer-nav">
          <a href="#" className="drawer-nav__item text-white ff-bold">Casino Games</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">Live Games</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">TV-Bet</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">Sport Games</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">Virtual</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">Tournaments</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">Spin Shop</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">FAQ</a>
          <a href="#" className="drawer-nav__item text-white ff-bold">Support Chat</a>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;

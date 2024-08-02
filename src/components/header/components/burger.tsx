import cn from "classnames";

import { useDrawer } from "@/hooks/use-drawer.ts";

const Burger = () => {
  const { onToggle, open } = useDrawer();

  return (
    <button className="header-burger" onClick={onToggle}>
      <svg className={cn("header-burger__svg", {
        "--open": open,
      })} width="24" height="25" viewBox="0 0 24 25" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18.7427H21" stroke="white" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
        <path d="M3 12.7427H15" stroke="white" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
        <path d="M3 6.74268H21" stroke="white" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default Burger;

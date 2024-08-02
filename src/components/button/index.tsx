import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardedRef, forwardRef } from "react";
import cn from "classnames";

import "./style.scss";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "icon";
  appearance?: "error" | "default";
}

const Button = forwardRef(({
  children,
  variant,
  appearance,
  className,
  ...props
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {

  return (
    <button className={cn(className, "button", {
      "button__icon": variant === "icon",
      "button__error": appearance === "error",
    })} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button;

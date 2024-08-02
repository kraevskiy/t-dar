import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";

import "./styles.scss";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = forwardRef(({ className, icon, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {

  return <div className={cn(className, "input-wrapper")}>
    <input className="input-wrapper__field" type="text" ref={ref} {...props} value="ALPHA2021" />
    {icon && <div className="input-wrapper__icon">
      {icon}
    </div>}
  </div>;
});

export default Input;

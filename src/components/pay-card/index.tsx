import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";

import { DataTypes } from "@/types/data.types.ts";
import "./style.scss";

interface PayCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: DataTypes;
}

const PayCard = ({ data: { name, description, logo, badge }, className, ...props }: PayCardProps) => {

  return (
    <div className={cn("pay-card", className)} {...props}>
      <div className="pay-card__img">
        <img src={logo} alt={name} />
      </div>
      <div className="pay-card__name">{name}</div>
      <div className="pay-card__description">{description}</div>
      {badge && <div className={cn("pay-card__badge", {
        "error": badge.type === "error",
      })}>
        {badge.name}
      </div>}
    </div>
  );
};

export default PayCard;

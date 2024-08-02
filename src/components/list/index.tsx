import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import { format } from "date-fns";

import { TransactionType } from "@/types/data.types.ts";
import "./styles.scss";
import { formatAmount } from "@/helpers/format-amount.ts";

interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const List = ({ className, ...props }: ListProps) => <div className={cn(className, "list-wrapper")} {...props} />;

List.Row = ({
  className,
  data: { type, name, number, date, amount, status },
  ...props
}: ListProps & {
  data: TransactionType
}) => {

  return (
    <div className={cn(className, "list-row")} {...props}>
      <div className="list-row__logo">
        <img src={type} alt={name} />
      </div>
      <div className="list-row__status">
        <div className={cn("list-row__status-value", `--${status}`)}>{status}</div>
        <div className="list-row__status-text">Operation Status</div>
      </div>
      <div className="list-row__body row-body">
        <div className="row-body__content">
          <div className="row-body__item">
            <div className="row-body__item-value">{name}</div>
            <div className="row-body__item-text">Withdraw</div>
          </div>
          <div className="row-body__item">
            <div className="row-body__item-value">{number}</div>
            <div className="row-body__item-text">Transactions Number</div>
          </div>
          <div className="row-body__item">
            <div className="row-body__item-value">{format(date, "dd.MM 'at' h:mma")}</div>
            <div className="row-body__item-text">Payment Date</div>
          </div>
          <div className="row-body__item">
            <div className="row-body__item-value">{formatAmount(amount / 100)}</div>
            <div className="row-body__item-text">Amount Payed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import "./style.scss";

interface GridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const Grid = ({ className, ...props }: GridProps) => <div className={cn("grid", className)} {...props} />;

Grid.Item = ({ className, ...props }: GridProps) => <div className={cn("grid-item", className)} {...props} />;

export default Grid;

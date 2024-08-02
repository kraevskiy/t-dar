import Check from "./icons/check.svg";
import X from "./icons/x.svg";
import Filter from "./icons/filter.svg";
import Close from "./icons/close.svg";
import ArrowLeft from "./icons/arrow-left.svg";

type IconProps = {
  name: "check" | "x" | "filter" | "close" | "arrow-left";
};

const Icon = (props: IconProps) => {
  const { name, ...svgProps } = props;

  const Icons: Record<IconProps["name"], React.ReactNode> = {
    check: <Check {...svgProps} />,
    x: <X {...svgProps} />,
    filter: <Filter {...svgProps} />,
    close: <Close {...svgProps} />,
    "arrow-left": <ArrowLeft {...svgProps} />,
  };

  return Icons[name];
};

export default Icon;

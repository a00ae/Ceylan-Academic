import { memo } from "react";
import "./box.scss"

interface Props {
  id: number;
  className?: string;
  title: string;
  desc?: string;
}

const Box = ({ id, className = "", title, desc }: Props) => {
  return (
    <div className={`box ${className}`}>
      <div className={`box${className ? `${className}_heading` : "_heading"}`}>
        <span data-number>0{id}</span>
        <span data-break> | </span>
        <span data-title>{title}</span>
      </div>
      {desc && <div className="box_desc">{desc}</div>}
    </div>
  );
};

export default memo(Box);
